import Link from "next/link";
import { Terminal } from "lucide-react";

export function Footer() {
  return (
    <div className="w-full px-4 md:px-8 pb-8 pt-12 mt-auto">
      <footer
        className="max-w-[1199px] mx-auto rounded-[32px]"
        style={{
          backgroundColor: "var(--surface-1)",
          padding: "80px 64px",
          border: "1px solid var(--hairline)",
          boxShadow: "0 24px 64px -24px rgba(0,0,0,0.8), inset 0 1px 0 rgba(255,255,255,0.06)",
        }}
      >
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1 flex flex-col gap-4">
            <div className="flex items-center gap-3">
            <div className="flex items-center justify-center rounded-full h-8 w-8 overflow-hidden bg-white border border-hairline">
              <img src="/logo.png" alt="NullTrace Logo" className="w-full h-full object-cover" />
            </div>
              <span className="text-[17px] text-ink font-semibold tracking-tight">
                NullTrace
              </span>
            </div>
            <span className="micro text-ink-muted leading-relaxed">
              Intelligence OSINT,
              <br />
              sans compromis.
            </span>
          </div>

          {/* Produits */}
          <div className="flex flex-col gap-3">
            <span className="caption text-ink font-semibold">Produits</span>
            <Link
              href="/ip"
              className="caption text-ink-muted hover:text-ink transition-colors"
            >
              Recherche IP
            </Link>
            <Link
              href="/email"
              className="caption text-ink-muted hover:text-ink transition-colors"
            >
              Recherche Email
            </Link>
            <Link
              href="/phone"
              className="caption text-ink-muted hover:text-ink transition-colors"
            >
              Recherche Téléphone
            </Link>
          </div>

          {/* Ressources */}
          <div className="flex flex-col gap-3">
            <span className="caption text-ink font-semibold">Ressources</span>
            <Link
              href="/docs"
              className="caption text-ink-muted hover:text-ink transition-colors"
            >
              Documentation API
            </Link>
            <Link
              href="/about"
              className="caption text-ink-muted hover:text-ink transition-colors"
            >
              À propos
            </Link>
          </div>

          {/* Légal */}
          <div className="flex flex-col gap-3">
            <span className="caption text-ink font-semibold">Légal</span>
            <span className="caption text-ink-muted">
              Politique de confidentialité
            </span>
            <span className="caption text-ink-muted">
              Conditions d'utilisation
            </span>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-3">
            <span className="caption text-ink font-semibold">Contact</span>
            <a
              href="mailto:contact@nulltrace.io"
              className="caption text-ink-muted hover:text-ink transition-colors"
            >
              contact@nulltrace.io
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{ borderTop: "1px solid var(--hairline-soft)" }}
        >
          <span className="micro text-ink-muted">
            © 2026 NullTrace - Dark Packet.
          </span>
          <span className="micro text-ink-muted">
            Fait par Félix TOVIGNAN.
          </span>
        </div>
      </footer>
    </div>
  );
}
