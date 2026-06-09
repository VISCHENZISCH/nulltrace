"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Terminal } from "lucide-react";

export function Navbar() {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 md:px-8 pointer-events-none">
      <header
        className="w-full max-w-[1199px] rounded-[100px] pointer-events-auto transition-all duration-300"
        style={{
          backgroundColor: "rgba(20, 20, 20, 0.85)",
          backdropFilter: "blur(16px)",
          height: "72px",
          border: "1px solid var(--hairline)",
          boxShadow: "0 12px 32px -12px rgba(0,0,0,0.8), inset 0 1px 0 rgba(255,255,255,0.06)",
        }}
      >
        <div className="h-full flex items-center justify-between pl-8 pr-3 md:pr-4">
          {/* Left: Logo */}
          <div className="flex items-center gap-10">
            <Link href="/" className="flex items-center gap-3 transition-transform hover:scale-[1.02] active:scale-[0.98]">
              <div className="flex items-center justify-center rounded-full h-9 w-9 overflow-hidden bg-white border border-hairline">
                <img src="/logo.png" alt="NullTrace Logo" className="w-full h-full object-cover" />
              </div>
              <span className="text-[17px] text-ink font-semibold tracking-tight">
                NullTrace
              </span>
            </Link>

            {/* Center: Nav links */}
            <nav className="hidden md:flex gap-1.5 items-center">
              {[
                { href: "/ip", label: "IP" },
                { href: "/email", label: "Email" },
                { href: "/phone", label: "Téléphone" },
                { href: "/docs", label: "API" },
                { href: "/about", label: "À propos" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-[15px] px-5 py-2 rounded-full transition-all"
                  style={{
                    color: isActive(link.href)
                      ? "var(--ink)"
                      : "var(--ink-muted)",
                    backgroundColor: isActive(link.href)
                      ? "var(--surface-2)"
                      : "transparent",
                    fontWeight: isActive(link.href) ? 500 : 400,
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive(link.href)) e.currentTarget.style.color = "var(--ink)";
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive(link.href)) e.currentTarget.style.color = "var(--ink-muted)";
                  }}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Right: CTA pair */}
          <div className="flex items-center gap-3">
            <Link
              href="/login"
              className="hidden md:inline-flex text-[15px] text-ink-muted hover:text-ink px-4 py-2 transition-colors"
            >
              Connexion
            </Link>
            <Link
              href="/register"
              className="btn-primary"
              style={{ padding: "12px 24px", fontSize: "15px" }}
            >
              Créer un compte
            </Link>
          </div>
        </div>
      </header>
    </div>
  );
}
