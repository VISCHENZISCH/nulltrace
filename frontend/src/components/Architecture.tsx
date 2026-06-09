"use client";

import { motion } from "framer-motion";
import { Server, Database, Container, ShieldCheck } from "lucide-react";

export default function Architecture() {
  return (
    <section id="architecture" className="section">
      <div className="section-divider" style={{ marginBottom: "var(--sp-section)" }} />
      
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        style={{ textAlign: "center", marginBottom: 64 }}
      >
        <span
          className="caption"
          style={{
            color: "var(--primary)",
            marginBottom: 16,
            display: "inline-block",
          }}
        >
          [ ARCHITECTURE ]
        </span>
        <h2 className="display-lg" style={{ marginBottom: 16 }}>
          Conçu pour la <span className="text-primary">performance.</span>
        </h2>
        <p className="body-lg" style={{ maxWidth: 600, margin: "0 auto" }}>
          L'architecture de NullTrace est découplée, stateless et optimisée pour des 
          temps de réponse ultra-rapides grâce à son backend développé en Rust.
        </p>
      </motion.div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: 24,
        }}
      >
        {[
          {
            icon: <Server size={24} />,
            title: "BACKEND RUST",
            desc: "API construite avec Axum pour une concurrence maximale et une consommation mémoire minimale.",
          },
          {
            icon: <Database size={24} />,
            title: "CACHE INTELLIGENT",
            desc: "Stockage local SQLite ou PostgreSQL via SQLx pour réduire les appels aux APIs tierces.",
          },
          {
            icon: <Container size={24} />,
            title: "PRÊT POUR DOCKER",
            desc: "Déploiement en une commande avec Docker Compose. Totalement isolé et reproductible.",
          },
          {
            icon: <ShieldCheck size={24} />,
            title: "SÉCURITÉ & PRIVACY",
            desc: "Pas de stockage persistant des données par défaut. Respect du RGPD et des CGU.",
          },
        ].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="hacker-card"
            style={{ padding: 24 }}
          >
            <div
              style={{
                width: 48,
                height: 48,
                background: "var(--surface-2)",
                border: "1px solid var(--hairline)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: 20,
                color: "var(--primary)",
              }}
            >
              {item.icon}
            </div>
            <h3 style={{ fontFamily: "var(--font-mono)", fontSize: 16, fontWeight: 700, marginBottom: 8, color: "var(--ink)" }}>{item.title}</h3>
            <p className="body-sm text-muted">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
