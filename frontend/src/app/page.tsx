"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Globe,
  Mail,
  Phone,
  FileText,
  Check,
  Shield,
  Search,
  ShieldAlert,
  Cpu,
  Zap,
  ArrowRight,
  ChevronRight,
  BarChart3,
  Lock,
  Eye,
  Terminal,
  Database,
  Server,
  Map as MapIcon,
} from "lucide-react";

import { Variants } from "framer-motion";

const FADE_UP_ANIMATION_VARIANTS: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 50, damping: 20 } },
};

export default function Home() {
  return (
    <div className="flex flex-col w-full overflow-hidden">
      {/* =======================================================
          HERO - One assertive statement, generous breathing room
          ======================================================= */}
      <motion.section 
        className="w-full max-w-[1199px] mx-auto px-4 md:px-8 pt-32 pb-20"
        initial="hidden"
        animate="show"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: 0.15 } }
        }}
      >
        <div className="text-center max-w-[900px] mx-auto">
          <motion.h1 variants={FADE_UP_ANIMATION_VARIANTS} className="display-xxl mb-8">
            Investigation OSINT
          </motion.h1>
          <motion.p variants={FADE_UP_ANIMATION_VARIANTS} className="subhead text-ink-muted max-w-[620px] mx-auto mb-12">
            NullTrace centralise la recherche d'informations publiques sur les adresses IP, emails et numéros de téléphone. Un outil conçu par Dark Packet pour les analystes SOC et les enquêteurs.
          </motion.p>
          <motion.div variants={FADE_UP_ANIMATION_VARIANTS} className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/ip"
              className="btn-primary"
              style={{ padding: "15px 28px", fontSize: "16px" }}
            >
              Lancer une recherche
            </Link>
            <Link
              href="/about"
              className="btn-secondary"
              style={{ padding: "15px 28px", fontSize: "16px" }}
            >
              En savoir plus
            </Link>
          </motion.div>
        </div>
      </motion.section>

      {/* =======================================================
          PRODUCT MOCKUP - Level-2 light-edge tile
          ======================================================= */}
      <motion.section 
        className="w-full max-w-[1199px] mx-auto px-4 md:px-8 pb-24"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        variants={FADE_UP_ANIMATION_VARIANTS}
      >
        <div
          className="w-full rounded-2xl overflow-hidden border border-hairline"
          style={{
            backgroundColor: "var(--surface-1)",
            boxShadow:
              "inset 0 0.5px 0 rgba(255,255,255,0.10), 0 10px 30px rgba(0,0,0,0.25)",
          }}
        >
          {/* Browser chrome */}
          <div
            className="h-10 flex items-center px-4 gap-2"
            style={{
              borderBottom: "1px solid var(--hairline)",
              backgroundColor: "var(--surface-1)",
            }}
          >
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full" style={{ backgroundColor: "rgba(255,255,255,0.08)" }} />
              <div className="w-3 h-3 rounded-full" style={{ backgroundColor: "rgba(255,255,255,0.08)" }} />
              <div className="w-3 h-3 rounded-full" style={{ backgroundColor: "rgba(255,255,255,0.08)" }} />
            </div>
            <div
              className="mx-auto text-center micro text-ink-muted px-8 py-0.5 rounded-md"
              style={{
                backgroundColor: "var(--canvas)",
                border: "1px solid var(--hairline)",
              }}
            >
              
            </div>
          </div>

          {/* Terminal content */}
          <div
            className="p-6 md:p-8 font-mono text-[15px] leading-relaxed"
            style={{ backgroundColor: "var(--canvas)" }}
          >
            <div className="text-ink-muted mb-1">
              # Initialisation du module de recherche globale...
            </div>
            <div className="mb-4" style={{ color: "var(--accent-blue)" }}>
              ❯ nulltrace lookup --target 8.8.8.8 --modules shodan,abuseipdb,bgpview
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              <div
                className="p-4 rounded-xl flex flex-col gap-1.5"
                style={{
                  backgroundColor: "var(--surface-1)",
                  border: "1px solid var(--hairline)",
                }}
              >
                <div className="caption text-ink-muted mb-1">GÉOLOCALISATION</div>
                <div className="body-sm text-ink">
                  Mountain View, California
                </div>
                <div className="body-sm text-ink-muted">
                  ISP: Google LLC
                </div>
                <div className="body-sm text-ink-muted">
                  ASN: AS15169
                </div>
                <div className="body-sm text-ink-muted">
                  37.4223, -122.0847
                </div>
              </div>
              <div
                className="p-4 rounded-xl flex flex-col gap-1.5"
                style={{
                  backgroundColor: "var(--surface-1)",
                  border: "1px solid var(--hairline)",
                }}
              >
                <div className="caption text-ink-muted mb-1">RÉPUTATION & PORTS</div>
                <div className="body-sm" style={{ color: "var(--semantic-success)" }}>
                  ● AbuseIPDB: 0 signalements
                </div>
                <div className="body-sm text-ink-muted">
                  Shodan: Ports exposés
                </div>
                <div className="body-sm text-ink-muted">
                  53/tcp, 53/udp, 443/tcp
                </div>
                <div className="body-sm text-ink-muted">
                  Statut: Propre
                </div>
              </div>
              <div
                className="p-4 rounded-xl flex flex-col gap-1.5"
                style={{
                  backgroundColor: "var(--surface-1)",
                  border: "1px solid var(--hairline)",
                }}
              >
                <div className="caption text-ink-muted mb-1">BGP ROUTING</div>
                <div className="body-sm text-ink">AS15169 (Google)</div>
                <div className="body-sm text-ink-muted">
                  Prefix: 8.8.8.0/24
                </div>
                <div className="body-sm text-ink-muted">
                  Upstreams: AS3356, AS174
                </div>
                <div className="body-sm text-ink-muted">
                  Dernière MAJ: il y a 2h
                </div>
              </div>
            </div>

            <div className="text-ink-muted">
              ✓ Recherche complétée en 342ms. Rapport global généré.
            </div>
          </div>
        </div>
      </motion.section>

      {/* =======================================================
          GRADIENT SPOTLIGHT CARDS - 3 modules principaux
          ======================================================= */}
      <motion.section 
        className="section-padding w-full max-w-[1199px] mx-auto px-4 md:px-8"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: 0.1 } }
        }}
      >
        <motion.h2 variants={FADE_UP_ANIMATION_VARIANTS} className="display-xl mb-4">
          Trois vecteurs d'investigation.
        </motion.h2>
        <motion.p variants={FADE_UP_ANIMATION_VARIANTS} className="body-lg text-ink-muted mb-12 max-w-[500px]">
          Des requêtes simultanées sur de multiples bases de données, regroupées en 3 modules clairs.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* IP */}
          <motion.div variants={FADE_UP_ANIMATION_VARIANTS} className="h-full">
            <Link href="/ip" className="spotlight-dark">
              <div className="flex items-start justify-between mb-8">
                <Globe className="w-10 h-10 text-ink" />
                <ChevronRight className="w-6 h-6 opacity-50" />
              </div>
              <h3 className="display-md mb-3">Lookup IP</h3>
              <p className="body text-ink-muted mb-8 max-w-[380px]">
                Géolocalisation via ip-api, routage BGPView, analyse des ports avec Shodan et réputation via AbuseIPDB.
              </p>
              <span className="btn-translucent mt-auto self-start">Rechercher une IP</span>
            </Link>
          </motion.div>

          {/* Email */}
          <motion.div variants={FADE_UP_ANIMATION_VARIANTS} className="h-full">
            <Link href="/email" className="spotlight-dark">
              <div className="flex items-start justify-between mb-8">
                <Mail className="w-10 h-10 text-ink" />
                <ChevronRight className="w-6 h-6 opacity-50" />
              </div>
              <h3 className="display-md mb-3">Lookup Email</h3>
              <p className="body text-ink-muted mb-8 max-w-[380px]">
                Validation du format, détection des leaks avec HaveIBeenPwned, profils sociaux via Holehe et image Gravatar.
              </p>
              <span className="btn-translucent mt-auto self-start">Vérifier un Email</span>
            </Link>
          </motion.div>

          {/* Téléphone */}
          <motion.div variants={FADE_UP_ANIMATION_VARIANTS} className="h-full">
            <Link href="/phone" className="spotlight-dark">
              <div className="flex items-start justify-between mb-8">
                <Phone className="w-10 h-10 text-ink" />
                <ChevronRight className="w-6 h-6 opacity-50" />
              </div>
              <h3 className="display-md mb-3">Lookup Téléphone</h3>
              <p className="body text-ink-muted mb-8 max-w-[380px]">
                Parsing avec libphonenumber, identification du pays, opérateur mobile (NumVerify) et fuseau horaire précis.
              </p>
              <span className="btn-translucent mt-auto self-start">Analyser un numéro</span>
            </Link>
          </motion.div>
        </div>
      </motion.section>

      {/* =======================================================
          FINAL CTA - One last statement, white pill
          ======================================================= */}
      <motion.section 
        className="section-padding w-full max-w-[1199px] mx-auto px-4 md:px-8 text-center pb-32"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: 0.1 } }
        }}
      >
        <motion.h2 variants={FADE_UP_ANIMATION_VARIANTS} className="display-xl mb-6">
          Prêt à explorer ?
        </motion.h2>
        <motion.p variants={FADE_UP_ANIMATION_VARIANTS} className="body-lg text-ink-muted max-w-[480px] mx-auto mb-10">
          Rejoignez les experts qui utilisent NullTrace pour leurs investigations numériques quotidiennes.
        </motion.p>
        <motion.div variants={FADE_UP_ANIMATION_VARIANTS} className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://github.com/VISCHENZISCH/nulltrace"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            style={{ padding: "16px 32px", fontSize: "17px" }}
          >
            Télécharger sur GitHub
          </a>
          <Link
            href="/docs"
            className="btn-secondary"
            style={{ padding: "16px 32px", fontSize: "17px" }}
          >
            Documentation
          </Link>
        </motion.div>
      </motion.section>
    </div>
  );
}