"use client";

import { motion } from "framer-motion";
import {
  Terminal,
  ArrowRight,
  Globe,
  Mail,
  Phone,
  ShieldAlert,
} from "lucide-react";

export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        position: "relative",
        overflow: "hidden",
        padding: "80px 24px 100px",
      }}
    >
      {/* Background grid */}
      <div
        className="bg-grid"
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0.8,
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{ textAlign: "center", marginBottom: 30 }}
        >
          <span className="badge">
            <Terminal size={14} />
            Sysadmin & Threat Intel Platform
          </span>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="display-xxl"
          style={{
            textAlign: "center",
            marginBottom: 24,
            maxWidth: 900,
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          Trace l'invisible.
          <br />
          <span className="text-primary animate-blink">_Sécurisez tout.</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="body-lg"
          style={{
            textAlign: "center",
            maxWidth: 600,
            margin: "0 auto 40px",
            color: "var(--ink-muted)"
          }}
        >
          Centralisez vos recherches OSINT : IP, Email, Téléphone. 
          Géolocalisation, détection de leaks, scores de réputation — 
          interface en ligne de commande intégrée.
        </motion.p>

        {/* CTA Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 16,
            flexWrap: "wrap",
          }}
        >
          <a href="#modules" className="btn-primary" style={{ padding: "14px 28px", fontSize: 14 }}>
            $ ./explorer --modules
            <ArrowRight size={16} style={{ marginLeft: 8 }} />
          </a>
          <a href="#api" className="btn-secondary" style={{ padding: "14px 28px", fontSize: 14 }}>
            Voir la documentation API
          </a>
        </motion.div>

        {/* Terminal Demo Preview */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          style={{
            marginTop: 72,
            background: "var(--canvas)",
            borderRadius: "var(--r-md)",
            border: "1px solid var(--hairline)",
            padding: "0",
            maxWidth: 800,
            marginLeft: "auto",
            marginRight: "auto",
            boxShadow: "var(--shadow-lg)",
            overflow: "hidden"
          }}
        >
          {/* Fake terminal bar */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              background: "var(--surface-2)",
              padding: "10px 16px",
              borderBottom: "1px solid var(--hairline)",
            }}
          >
            <div style={{ display: "flex", gap: 6 }}>
              <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#ff003c" }} />
              <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#ffb800" }} />
              <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#00ff41" }} />
            </div>
            <div
              style={{
                fontSize: 12,
                color: "var(--ink-muted)",
                fontFamily: "var(--font-mono)",
                textTransform: "uppercase"
              }}
            >
              root@nulltrace:~
            </div>
            <div style={{ width: 48 }} /> {/* Spacer */}
          </div>

          {/* Simulated terminal output */}
          <div style={{ padding: 24, fontFamily: "var(--font-mono)", fontSize: 13, lineHeight: 1.6 }}>
            <div style={{ color: "var(--ink)" }}>
              <span style={{ color: "var(--primary)" }}>root@nulltrace</span>:
              <span style={{ color: "var(--accent-cyan)" }}>~</span># ./nulltrace-cli scan --target 192.168.1.1
            </div>
            <div style={{ color: "var(--ink-muted)", marginTop: 8, marginBottom: 16 }}>
              [+] Initiating deep scan...<br/>
              [+] Checking routing tables...<br/>
              [+] Fetching Shodan open ports...
            </div>
            
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                gap: 16,
              }}
            >
              {[
                {
                  icon: <Globe size={18} />,
                  label: "IP LOOKUP",
                  desc: "192.168.1.1",
                  status: "CLEAN",
                  color: "var(--primary)"
                },
                {
                  icon: <Mail size={18} />,
                  label: "EMAIL LEAK",
                  desc: "admin@corp.local",
                  status: "PWNED",
                  color: "var(--error)"
                },
                {
                  icon: <Phone size={18} />,
                  label: "PHONE TRACE",
                  desc: "+33 6 12 34 56 78",
                  status: "VERIFIED",
                  color: "var(--accent-cyan)"
                },
              ].map((item, i) => (
                <div
                  key={i}
                  style={{
                    background: "var(--surface-1)",
                    border: `1px solid var(--hairline)`,
                    borderLeft: `3px solid ${item.color}`,
                    padding: 16,
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8, color: "var(--ink)" }}>
                    {item.icon}
                    <span style={{ fontWeight: 700, letterSpacing: "0.05em" }}>{item.label}</span>
                  </div>
                  <div style={{ color: "var(--ink-muted)", marginBottom: 8 }}>{item.desc}</div>
                  <div style={{ display: "inline-block", background: "var(--surface-2)", color: item.color, padding: "2px 8px", fontSize: 11, fontWeight: 700 }}>
                    [{item.status}]
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
