"use client";

import { motion } from "framer-motion";
import { Terminal, CheckSquare, ArrowRight } from "lucide-react";

export default function FeatureAPI() {
  return (
    <section id="api" className="section" style={{ background: "var(--surface-1)", borderTop: "1px solid var(--hairline)", borderBottom: "1px solid var(--hairline)" }}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: 60,
          alignItems: "center",
        }}
      >
        {/* Left Text */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <span
            className="caption"
            style={{
              color: "var(--primary)",
              marginBottom: 16,
              display: "inline-block",
            }}
          >
            [ REST API ]
          </span>
          <h2 className="display-lg" style={{ marginBottom: 24 }}>
            Une API pour vos scripts.<br />
            <span style={{ color: "var(--ink-muted)" }}>Prête à l'emploi.</span>
          </h2>
          <p className="body-lg" style={{ marginBottom: 32 }}>
            NullTrace n'est pas qu'une interface web. Intégrez nos modules de recherche 
            directement dans vos playbooks SOC, vos scripts Python ou vos outils d'automatisation.
          </p>
          
          <div style={{ display: "flex", flexDirection: "column", gap: 16, marginBottom: 40 }}>
            {[
              "Format de réponse JSON standardisé",
              "Rate limiting intelligent intégré",
              "Documentation Swagger / OpenAPI disponible",
              "Authentification par token (optionnel)",
            ].map((item, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <CheckSquare size={18} style={{ color: "var(--primary)" }} />
                <span className="body" style={{ fontFamily: "var(--font-mono)" }}>{item}</span>
              </div>
            ))}
          </div>

          <a href="/docs" className="btn-secondary">
            Lire la documentation API
            <ArrowRight size={16} />
          </a>
        </motion.div>

        {/* Right Code Block */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          style={{
            background: "var(--canvas)",
            borderRadius: "var(--r-md)",
            border: "1px solid var(--hairline)",
            padding: "24px",
            boxShadow: "var(--shadow-lg)",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              marginBottom: 20,
              paddingBottom: 16,
              borderBottom: "1px solid var(--hairline)",
            }}
          >
            <Terminal size={16} color="var(--ink-muted)" />
            <span style={{ color: "var(--ink-muted)", fontSize: 13, fontFamily: "var(--font-mono)" }}>
              /bin/bash
            </span>
          </div>

          <pre
            style={{
              margin: 0,
              fontFamily: "var(--font-mono)",
              fontSize: 13,
              lineHeight: 1.6,
              color: "var(--ink)",
              overflowX: "auto",
            }}
          >
            <span style={{ color: "var(--primary)" }}>curl</span> -X GET "https://api.nulltrace.io/v1/ip/8.8.8.8" \
<br />
            <span>  -H</span> "Authorization: Bearer YOUR_TOKEN"
            <br /><br />
            <span style={{ color: "var(--ink-muted)" }}># Response:</span><br />
            <span style={{ color: "var(--accent-cyan)" }}>{`{
  "status": "success",
  "data": {
    "ip": "8.8.8.8",
    "location": {
      "country": "United States",
      "city": "Mountain View"
    },
    "asn": "AS15169 Google LLC",
    "reputation_score": 0
  }
}`}</span>
          </pre>
        </motion.div>
      </div>
    </section>
  );
}
