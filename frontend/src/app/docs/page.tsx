"use client";

import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const endpoints = [
  {
    method: "GET",
    path: "/api/v1/ip/{address}",
    description: "Récupère les informations géographiques, réseau et la réputation d'une adresse IP.",
    response: `{
  "country": "United States",
  "city": "Mountain View",
  "lat": 37.386,
  "lon": -122.0838,
  "isp": "Google LLC",
  "asn": "AS15169 Google LLC",
  "abuse_score": 0,
  "ports": [80, 443]
}`
  },
  {
    method: "GET",
    path: "/api/v1/email/{address}",
    description: "Vérifie les fuites de données (leaks), la présence sur des plateformes sociales et le profil Gravatar d'un email.",
    response: `{
  "valid": true,
  "breaches": ["LinkedIn", "Adobe", "Canva"],
  "platforms": ["twitter", "github", "instagram"],
  "gravatar_url": "https://s.gravatar.com/avatar/...",
  "risk_score": 85
}`
  },
  {
    method: "GET",
    path: "/api/v1/phone/{number}",
    description: "Valide un numéro de téléphone international, identifie l'opérateur et localise approximativement.",
    response: `{
  "valid": true,
  "country": "France",
  "carrier": "Orange",
  "line_type": "mobile",
  "region": "Île-de-France",
  "lat": 48.8566,
  "lon": 2.3522
}`
  }
];

export default function DocsPage() {
  const [activeTab, setActiveTab] = useState("curl");

  return (
    <div className="w-full max-w-[1199px] mx-auto px-4 py-20 flex flex-col gap-24">
      <div className="space-y-6 pt-10">
        <div className="flex flex-col md:flex-row items-baseline gap-6">
          <h1 className="display-xl text-ink tracking-tight">Documentation API</h1>
          <span className="caption bg-surface-2 text-ink px-3 py-1 rounded-full border border-hairline whitespace-nowrap">v1.0 • OpenAPI 3.0</span>
        </div>
        <p className="subhead text-ink-muted max-w-2xl">Intègre NullTrace dans tes outils. API REST, JSON, rate-limited.</p>
        <div className="pt-4">
          <a href="#" className="btn-secondary">
            Ouvrir Swagger UI
          </a>
        </div>
      </div>

      <section className="space-y-8">
        <h2 className="display-md text-ink">Exemples d'intégration</h2>
        <Tabs className="w-full framer-card border border-hairline">
          <TabsList className="bg-transparent border-b border-hairline w-full justify-start rounded-none p-0 h-auto gap-6 mb-6">
            <TabsTrigger value="curl" activeValue={activeTab} setActiveValue={setActiveTab} className="bg-transparent text-ink-muted hover:text-ink data-[state=active]:text-ink data-[state=active]:border-b-2 data-[state=active]:border-accent-blue rounded-none px-0 py-3 shadow-none">cURL</TabsTrigger>
            <TabsTrigger value="python" activeValue={activeTab} setActiveValue={setActiveTab} className="bg-transparent text-ink-muted hover:text-ink data-[state=active]:text-ink data-[state=active]:border-b-2 data-[state=active]:border-accent-blue rounded-none px-0 py-3 shadow-none">Python</TabsTrigger>
            <TabsTrigger value="js" activeValue={activeTab} setActiveValue={setActiveTab} className="bg-transparent text-ink-muted hover:text-ink data-[state=active]:text-ink data-[state=active]:border-b-2 data-[state=active]:border-accent-blue rounded-none px-0 py-3 shadow-none">JavaScript</TabsTrigger>
          </TabsList>
          
          <TabsContent value="curl" activeValue={activeTab}>
            <div className="bg-canvas rounded-xl p-6 overflow-x-auto border border-hairline">
              <pre className="body-sm font-mono text-ink-muted">
                <span className="text-accent-blue">curl</span> -X GET "http://localhost:3001/api/v1/ip/8.8.8.8" \<br/>
                <span>  -H</span> "Accept: application/json"
              </pre>
            </div>
          </TabsContent>
          
          <TabsContent value="python" activeValue={activeTab}>
            <div className="bg-canvas rounded-xl p-6 overflow-x-auto border border-hairline">
              <pre className="body-sm font-mono text-ink-muted">
                <span className="text-accent-blue">import</span> requests<br/><br/>
                url = <span className="text-semantic-success">"http://localhost:3001/api/v1/ip/8.8.8.8"</span><br/>
                response = requests.get(url)<br/><br/>
                <span className="text-accent-blue">print</span>(response.json())
              </pre>
            </div>
          </TabsContent>
          
          <TabsContent value="js" activeValue={activeTab}>
            <div className="bg-canvas rounded-xl p-6 overflow-x-auto border border-hairline">
              <pre className="body-sm font-mono text-ink-muted">
                fetch(<span className="text-semantic-success">"http://localhost:3001/api/v1/ip/8.8.8.8"</span>)<br/>
                &nbsp;&nbsp;.then(res =&gt; res.json())<br/>
                &nbsp;&nbsp;.then(data =&gt; console.log(data));
              </pre>
            </div>
          </TabsContent>
        </Tabs>
      </section>

      <section className="space-y-12">
        <h2 className="display-md text-ink">Endpoints disponibles</h2>
        
        <div className="flex flex-col gap-12">
          {endpoints.map((endpoint, i) => (
            <div key={i} className="framer-card border border-hairline">
              <div className="flex flex-col md:flex-row items-start md:items-center gap-6 border-b border-hairline pb-6 mb-6">
                <span className="headline text-semantic-success uppercase tracking-widest bg-semantic-success/10 px-4 py-2 rounded-full border border-semantic-success/20">
                  {endpoint.method}
                </span>
                <code className="headline text-ink font-mono">{endpoint.path}</code>
              </div>
              <div className="space-y-6">
                <p className="body-lg text-ink-muted leading-relaxed">{endpoint.description}</p>
                <div>
                  <h4 className="body text-ink mb-4">Exemple de réponse (200 OK)</h4>
                  <div className="bg-canvas rounded-xl p-6 overflow-x-auto border border-hairline">
                    <pre className="body-sm font-mono text-accent-blue">
                      {endpoint.response}
                    </pre>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-8 pb-10">
        <h2 className="display-md text-ink">Limites & Authentification</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="framer-card border border-hairline">
            <h3 className="headline text-ink mb-4">Rate Limiting</h3>
            <p className="body-lg text-ink-muted mb-4">Gratuit : 100 requêtes / heure par IP.</p>
            <p className="body text-ink/70">Les en-têtes <code className="bg-surface-2 px-2 py-1 rounded border border-hairline font-mono text-sm">X-RateLimit-Remaining</code> sont inclus dans chaque réponse HTTP.</p>
          </div>
          <div className="framer-card border border-hairline">
            <h3 className="headline text-ink mb-4">Authentification</h3>
            <p className="body-lg text-ink-muted mb-4">Aucune clé API requise pour l'usage basique.</p>
            <p className="body text-ink/70">Pour des volumes plus élevés, contactez-nous pour obtenir un token JWT d'accès partenaire.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
