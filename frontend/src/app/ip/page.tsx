"use client";

import { useState } from "react";
import { useIpLookup } from "@/lib/api";
import { SearchForm } from "@/components/SearchForm";
import { ResultCard } from "@/components/ResultCard";
import { ExportButtons } from "@/components/ExportButtons";
import { RiskBadge } from "@/components/RiskBadge";
import { LoadingSkeleton } from "@/components/LoadingSkeleton";
import { MapPin, Server, AlertTriangle, Radio, AlertCircle } from "lucide-react";
import dynamic from "next/dynamic";

const MapView = dynamic(() => import("@/components/MapView"), { ssr: false, loading: () => <div className="h-[300px] w-full bg-surface-1 animate-pulse rounded-xl"></div> });

export default function IpPage() {
  const [ip, setIp] = useState("");
  const [queryIp, setQueryIp] = useState("");
  
  const { data, isLoading, isError, error, refetch } = useIpLookup(queryIp);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (ip.trim()) {
      setQueryIp(ip.trim());
      setTimeout(() => refetch(), 0);
    }
  };

  return (
    <div className="w-full max-w-[1199px] mx-auto px-4 py-20 flex flex-col gap-12">
      <div className="text-center space-y-6 pt-10">
        <h1 className="display-xl text-ink tracking-tight">Analyser une adresse IP</h1>
        <p className="subhead text-ink-muted max-w-2xl mx-auto">
          Géolocalisation, réputation, réseau et services exposés.
        </p>
      </div>

      <SearchForm
        label="Adresse IP cible"
        placeholder="Ex : 8.8.8.8 ou 192.168.1.1"
        buttonText="Lancer l'analyse"
        note="Supporte IPv4 et IPv6"
        value={ip}
        onChange={(e) => setIp(e.target.value)}
        onSubmit={handleSubmit}
        isLoading={isLoading}
      />

      {isError && (
        <div className="framer-card border-red-500/50 bg-red-500/10 max-w-2xl mx-auto text-red-500 flex items-center gap-4">
          <AlertCircle className="h-5 w-5" />
          <p className="body-sm">Adresse IP invalide. Vérifiez le format. ({(error as Error).message})</p>
        </div>
      )}

      {isLoading && <LoadingSkeleton />}

      {data && !isLoading && !isError && (
        <div className="flex flex-col gap-8 animate-fade-in mt-10">
          <div className="flex flex-col sm:flex-row justify-between items-center border-b border-hairline pb-6 gap-4">
            <h2 className="display-md text-ink">Résultats pour <span className="text-accent-blue">{queryIp}</span></h2>
            <ExportButtons data={data} filename={`ip_${queryIp.replace(/:/g, '_')}`} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ResultCard title="Localisation" icon={MapPin}>
              <div className="space-y-4">
                <div className="flex justify-between border-b border-hairline pb-3">
                  <span className="body-sm text-ink-muted">Pays</span>
                  <span className="body-sm text-ink">{data.country || "N/A"}</span>
                </div>
                <div className="flex justify-between border-b border-hairline pb-3">
                  <span className="body-sm text-ink-muted">Ville</span>
                  <span className="body-sm text-ink">{data.city || "N/A"}</span>
                </div>
                <div className="flex justify-between pb-1">
                  <span className="body-sm text-ink-muted">Coordonnées</span>
                  <span className="body-sm text-ink">{data.lat && data.lon ? `${data.lat}, ${data.lon}` : "N/A"}</span>
                </div>
              </div>
            </ResultCard>

            <ResultCard title="Informations réseau" icon={Server}>
              <div className="space-y-4">
                <div className="flex justify-between border-b border-hairline pb-3">
                  <span className="body-sm text-ink-muted">ISP</span>
                  <span className="body-sm text-ink">{data.isp || "N/A"}</span>
                </div>
                <div className="flex justify-between pb-1">
                  <span className="body-sm text-ink-muted">ASN</span>
                  <span className="body-sm text-ink">{data.asn || "N/A"}</span>
                </div>
              </div>
            </ResultCard>

            <ResultCard title="Réputation (AbuseIPDB)" icon={AlertTriangle}>
              <div className="flex flex-col h-full justify-center items-center py-4 space-y-4">
                <span className="body text-ink-muted">Score d'abus</span>
                <RiskBadge score={data.abuse_score || 0} />
              </div>
            </ResultCard>

            <ResultCard title="Services exposés (Shodan)" icon={Radio}>
              <div className="space-y-4">
                <span className="body-sm text-ink-muted block mb-4">Ports ouverts trouvés :</span>
                {data.ports && data.ports.length > 0 ? (
                  <div className="flex flex-wrap gap-2">
                    {data.ports.map((port) => (
                      <span key={port} className="bg-surface-2 text-ink caption px-3 py-1 rounded-sm border border-hairline">Port {port}</span>
                    ))}
                  </div>
                ) : (
                  <span className="body-sm text-ink">Aucun port exposé détecté.</span>
                )}
              </div>
            </ResultCard>
          </div>
          
          <div className="framer-card border border-hairline flex flex-col gap-6 mt-4">
            <h3 className="headline text-ink flex items-center gap-3"><MapPin className="h-5 w-5 text-accent-blue" /> Carte de localisation</h3>
            {data.lat && data.lon ? (
              <MapView lat={data.lat} lon={data.lon} popupText={`IP: ${queryIp} - ${data.city}, ${data.country}`} />
            ) : (
              <div className="h-[300px] w-full bg-surface-2 flex items-center justify-center rounded-xl border border-hairline">
                <span className="body-sm text-ink-muted">Coordonnées GPS non disponibles.</span>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
