"use client";

import { useState } from "react";
import { usePhoneLookup } from "@/lib/api";
import { SearchForm } from "@/components/SearchForm";
import { ResultCard } from "@/components/ResultCard";
import { ExportButtons } from "@/components/ExportButtons";
import { LoadingSkeleton } from "@/components/LoadingSkeleton";
import { CheckCircle2, MapPin, RadioTower, Globe2, AlertCircle } from "lucide-react";
import dynamic from "next/dynamic";

const MapView = dynamic(() => import("@/components/MapView"), { ssr: false, loading: () => <div className="h-[300px] w-full bg-surface-1 animate-pulse rounded-xl"></div> });

export default function PhonePage() {
  const [phone, setPhone] = useState("");
  const [queryPhone, setQueryPhone] = useState("");
  
  const { data, isLoading, isError, error, refetch } = usePhoneLookup(queryPhone);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (phone.trim()) {
      setQueryPhone(phone.trim());
      setTimeout(() => refetch(), 0);
    }
  };

  return (
    <div className="w-full max-w-[1199px] mx-auto px-4 py-20 flex flex-col gap-12">
      <div className="text-center space-y-6 pt-10">
        <h1 className="display-xl text-ink tracking-tight">Analyser un numéro</h1>
        <p className="subhead text-ink-muted max-w-2xl mx-auto">
          Validation, opérateur, pays et localisation approximative.
        </p>
      </div>

      <SearchForm
        label="Numéro de téléphone"
        placeholder="Ex : +22961000000 ou +33612345678"
        buttonText="Lancer l'analyse"
        note="Format international requis (ex : +229...)"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        onSubmit={handleSubmit}
        isLoading={isLoading}
      />

      {isError && (
        <div className="framer-card border-red-500/50 bg-red-500/10 max-w-2xl mx-auto text-red-500 flex items-center gap-4">
          <AlertCircle className="h-5 w-5" />
          <p className="body-sm">Numéro de téléphone invalide. Vérifiez le format. ({(error as Error).message})</p>
        </div>
      )}

      {isLoading && <LoadingSkeleton />}

      {data && !isLoading && !isError && (
        <div className="flex flex-col gap-8 animate-fade-in mt-10">
          <div className="flex flex-col sm:flex-row justify-between items-center border-b border-hairline pb-6 gap-4">
            <h2 className="display-md text-ink">Résultats pour <span className="text-accent-blue">{queryPhone}</span></h2>
            <ExportButtons data={data} filename={`phone_${queryPhone.replace(/\+/g, '')}`} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ResultCard title="Validation" icon={CheckCircle2}>
              <div className="flex flex-col justify-center items-center h-full space-y-6 py-4">
                <span className="body text-ink-muted text-center">Format international</span>
                {data.valid ? (
                  <div className="bg-semantic-success text-inverse-ink headline px-6 py-2 rounded-full">Valide</div>
                ) : (
                  <div className="bg-destructive text-primary headline px-6 py-2 rounded-full">Invalide</div>
                )}
              </div>
            </ResultCard>

            <ResultCard title="Localisation" icon={Globe2}>
              <div className="space-y-4">
                <div className="flex justify-between border-b border-hairline pb-3 items-center">
                  <span className="body-sm text-ink-muted">Pays</span>
                  <span className="body-sm text-ink">{data.country || "N/A"}</span>
                </div>
                <div className="flex justify-between pb-1">
                  <span className="body-sm text-ink-muted">Région</span>
                  <span className="body-sm text-ink">{data.region || "N/A"}</span>
                </div>
              </div>
            </ResultCard>

            <ResultCard title="Opérateur" icon={RadioTower}>
              <div className="flex flex-col justify-center items-center h-full space-y-4 py-4">
                <span className="body text-ink-muted text-center">Réseau / Opérateur</span>
                <span className="display-md text-accent-blue">{data.carrier || "Inconnu"}</span>
                <span className="caption bg-surface-2 text-ink px-3 py-1 rounded-sm border border-hairline mt-2">{data.line_type || "Type inconnu"}</span>
              </div>
            </ResultCard>
          </div>
          
          <div className="framer-card border border-hairline flex flex-col gap-6 mt-4">
            <h3 className="headline text-ink flex items-center gap-3"><MapPin className="h-5 w-5 text-accent-blue" /> Localisation approximative</h3>
            {data.lat && data.lon ? (
              <MapView lat={data.lat} lon={data.lon} popupText={`Phone: ${queryPhone} - ${data.region}, ${data.country}`} />
            ) : (
              <div className="h-[300px] w-full bg-surface-2 flex items-center justify-center rounded-xl border border-hairline">
                <span className="body-sm text-ink-muted">Coordonnées géographiques non disponibles.</span>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
