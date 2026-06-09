"use client";

import { motion } from "framer-motion";
import {
  Globe,
  Mail,
  Phone,
  MapPin,
  AlertTriangle,
  Server,
  UserCheck,
  Fingerprint,
  Activity,
  Radio,
  Shield,
  Search,
} from "lucide-react";

const modules = [
  {
    id: "ip",
    title: "IP LOOKUP",
    subtitle: "Géolocalisation & Réputation",
    icon: <Globe size={24} />,
    spotlightClass: "hacker-card hacker-card-cyan",
    features: [
      { icon: <MapPin size={16} />, text: "Géolocalisation GPS précise" },
      { icon: <Server size={16} />, text: "Infos réseau : ISP, ASN" },
      { icon: <AlertTriangle size={16} />, text: "Score de réputation AbuseIPDB" },
      { icon: <Radio size={16} />, text: "Ports exposés (Shodan)" },
      { icon: <Activity size={16} />, text: "BGP / routing (BGPView)" },
    ],
    apis: ["ip-api.com", "IPInfo.io", "AbuseIPDB", "Shodan", "BGPView"],
  },
  {
    id: "email",
    title: "EMAIL LOOKUP",
    subtitle: "Leaks & Empreinte Digitale",
    icon: <Mail size={24} />,
    spotlightClass: "hacker-card hacker-card-red",
    features: [
      { icon: <Search size={16} />, text: "Vérification existence & format" },
      { icon: <AlertTriangle size={16} />, text: "Recherche de leaks (HIBP)" },
      { icon: <Fingerprint size={16} />, text: "Détection plateformes (Holehe)" },
      { icon: <UserCheck size={16} />, text: "Récupération profil Gravatar" },
      { icon: <Shield size={16} />, text: "Score de risque calculé" },
    ],
    apis: ["HaveIBeenPwned", "Holehe", "Gravatar"],
  },
  {
    id: "phone",
    title: "PHONE TRACE",
    subtitle: "Validation & Géolocalisation",
    icon: <Phone size={24} />,
    spotlightClass: "hacker-card",
    features: [
      { icon: <Search size={16} />, text: "Validation & parsing" },
      { icon: <MapPin size={16} />, text: "Identification pays, opérateur" },
      { icon: <Globe size={16} />, text: "Géolocalisation approximative" },
      { icon: <Activity size={16} />, text: "Vérification NumVerify" },
      { icon: <MapPin size={16} />, text: "Affichage carte Leaflet.js" },
    ],
    apis: ["NumVerify", "AbstractAPI", "libphonenumber"],
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

export default function Modules() {
  return (
    <section id="modules" className="section" style={{ paddingBottom: 60 }}>
      {/* Section header */}
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
            padding: "4px 12px",
            border: "1px solid var(--primary)",
            background: "var(--accent-soft)"
          }}
        >
          [ MODULES ]
        </span>
        <h2
          className="display-lg"
          style={{ color: "var(--ink)", marginBottom: 16 }}
        >
          Trois regards.<br />
          <span className="text-primary">Une vision complète.</span>
        </h2>
        <p
          className="body-lg"
          style={{ maxWidth: 550, margin: "0 auto" }}
        >
          Chaque module centralise les meilleures sources OSINT gratuites 
          pour vous offrir une analyse exhaustive en quelques secondes.
        </p>
      </motion.div>

      {/* Module cards */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: 24,
        }}
      >
        {modules.map((mod) => (
          <motion.div
            key={mod.id}
            variants={cardVariants}
            className={mod.spotlightClass}
            style={{
              display: "flex",
              flexDirection: "column",
            }}
            id={`module-${mod.id}`}
          >
            {/* Header */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 16,
                marginBottom: 24,
              }}
            >
              <div
                style={{
                  width: 48,
                  height: 48,
                  border: "1px solid var(--hairline)",
                  background: "var(--surface-2)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--ink)",
                }}
              >
                {mod.icon}
              </div>
              <div>
                <h3
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: 20,
                    fontWeight: 800,
                    marginBottom: 4,
                  }}
                >
                  {mod.title}
                </h3>
                <p
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: 12,
                    color: "var(--ink-muted)",
                  }}
                >
                  {mod.subtitle}
                </p>
              </div>
            </div>

            {/* Features list */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 12,
                marginBottom: 32,
              }}
            >
              {mod.features.map((feat, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 12,
                    fontSize: 14,
                    color: "var(--ink)",
                  }}
                >
                  <div style={{ color: "var(--ink-subtle)" }}>{feat.icon}</div>
                  {feat.text}
                </div>
              ))}
            </div>

            {/* APIs badges */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: 8,
                marginTop: "auto",
                paddingTop: 24,
                borderTop: "1px solid var(--hairline)"
              }}
            >
              {mod.apis.map((api) => (
                <span key={api} className="badge">
                  {api}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
