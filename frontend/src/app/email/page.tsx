"use client";

import { useState } from "react";
import { useEmailLookup } from "@/lib/api";
import { SearchForm } from "@/components/SearchForm";
import { ResultCard } from "@/components/ResultCard";
import { ExportButtons } from "@/components/ExportButtons";
import { RiskBadge } from "@/components/RiskBadge";
import { LoadingSkeleton } from "@/components/LoadingSkeleton";
import { CheckCircle2, ShieldAlert, Fingerprint, Image as ImageIcon, AlertCircle, AlertTriangle } from "lucide-react";

export default function EmailPage() {
  const [email, setEmail] = useState("");
  const [queryEmail, setQueryEmail] = useState("");
  
  const { data, isLoading, isError, error, refetch } = useEmailLookup(queryEmail);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setQueryEmail(email.trim());
      setTimeout(() => refetch(), 0);
    }
  };

  return (
    <div className="w-full max-w-[1199px] mx-auto px-4 py-20 flex flex-col gap-12">
      <div className="text-center space-y-6 pt-10">
        <h1 className="display-xl text-ink tracking-tight">Analyser une adresse email</h1>
        <p className="subhead text-ink-muted max-w-2xl mx-auto">
          Leaks connus, plateformes associées et profil public.
        </p>
      </div>

      <SearchForm
        label="Adresse email cible"
        placeholder="Ex : contact@exemple.com"
        buttonText="Lancer l'analyse"
        note="Aucun email n'est stocké sur nos serveurs."
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        onSubmit={handleSubmit}
        isLoading={isLoading}
      />

      {isError && (
        <div className="framer-card border-red-500/50 bg-red-500/10 max-w-2xl mx-auto text-red-500 flex items-center gap-4">
          <AlertCircle className="h-5 w-5" />
          <p className="body-sm">Erreur lors de l'analyse de l'email. ({(error as Error).message})</p>
        </div>
      )}

      {isLoading && <LoadingSkeleton />}

      {data && !isLoading && !isError && (
        <div className="flex flex-col gap-8 animate-fade-in mt-10">
          <div className="flex flex-col sm:flex-row justify-between items-center border-b border-hairline pb-6 gap-4">
            <h2 className="display-md text-ink">Résultats pour <span className="text-accent-blue">{queryEmail}</span></h2>
            <ExportButtons data={data} filename={`email_${queryEmail.replace(/[@.]/g, '_')}`} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ResultCard title="Validation" icon={CheckCircle2}>
              <div className="flex flex-col justify-center items-center h-full space-y-6 py-4">
                <span className="body text-ink-muted text-center">Format de l'adresse email</span>
                {data.valid ? (
                  <div className="bg-semantic-success text-inverse-ink headline px-6 py-2 rounded-full">Valide</div>
                ) : (
                  <div className="bg-destructive text-primary headline px-6 py-2 rounded-full">Invalide</div>
                )}
              </div>
            </ResultCard>

            <ResultCard title="Score de risque" icon={ShieldAlert}>
              <div className="flex flex-col h-full justify-center items-center py-4 space-y-6">
                <RiskBadge score={data.risk_score || 0} />
                <div className="w-full bg-surface-2 h-2 rounded-full overflow-hidden mt-2">
                  <div 
                    className={`h-full ${data.risk_score >= 70 ? 'bg-red-500' : data.risk_score >= 30 ? 'bg-gradient-orange' : 'bg-semantic-success'}`} 
                    style={{ width: `${Math.min(Math.max(data.risk_score, 0), 100)}%` }}
                  />
                </div>
              </div>
            </ResultCard>

            <ResultCard title="Profil Gravatar" icon={ImageIcon}>
              <div className="flex flex-col items-center justify-center space-y-4 py-4">
                {data.gravatar_url ? (
                  <div className="rounded-full overflow-hidden border border-hairline h-24 w-24">
                    <img src={data.gravatar_url} alt="Gravatar" className="h-full w-full object-cover" />
                  </div>
                ) : (
                  <div className="rounded-full bg-surface-2 flex items-center justify-center border border-hairline h-24 w-24">
                    <span className="body-sm text-ink-muted">Aucun</span>
                  </div>
                )}
                <span className="caption text-ink-muted">Image de profil publique associée</span>
              </div>
            </ResultCard>
            
            <ResultCard title="Présence en ligne (Holehe)" icon={Fingerprint}>
              <div className="space-y-4">
                <span className="body-sm text-ink-muted block mb-4">Comptes détectés sur ces plateformes :</span>
                {data.platforms && data.platforms.length > 0 ? (
                  <div className="flex flex-wrap gap-2">
                    {data.platforms.map((platform) => (
                      <span key={platform} className="bg-surface-2 text-ink caption px-3 py-1 rounded-sm border border-hairline">{platform}</span>
                    ))}
                  </div>
                ) : (
                  <span className="body-sm text-ink">Aucun compte détecté.</span>
                )}
              </div>
            </ResultCard>
          </div>

          <div className="w-full mt-4">
            <ResultCard title="Fuites de données (HaveIBeenPwned)" icon={ShieldAlert}>
              <div className="space-y-4">
                {data.breaches && data.breaches.length > 0 ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {data.breaches.map((breach) => (
                      <div key={breach} className="bg-surface-2 p-4 rounded-md border border-red-500/30 flex items-center gap-3">
                        <AlertTriangle className="h-5 w-5 text-red-500" />
                        <span className="body-sm text-ink">{breach}</span>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="bg-semantic-success/10 border border-semantic-success/30 p-6 rounded-md text-center">
                    <CheckCircle2 className="h-8 w-8 text-semantic-success mx-auto mb-3" />
                    <span className="body-sm text-semantic-success">Aucune fuite de données détectée pour cet email.</span>
                  </div>
                )}
              </div>
            </ResultCard>
          </div>
        </div>
      )}
    </div>
  );
}
