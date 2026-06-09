import { Code, User, Shield, Heart } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="w-full max-w-[1199px] mx-auto px-4 md:px-8 py-20 flex flex-col gap-24">
      <section className="text-center space-y-6 pt-10">
        <h1 className="display-xl text-ink tracking-tight">NullTrace</h1>
        <p className="subhead text-ink-muted max-w-2xl mx-auto">
          Un outil OSINT open source, développé par Dark Packet.
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="framer-card border border-hairline hover:border-hairline-soft transition-colors">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-10 w-10 rounded-full bg-surface-2 flex items-center justify-center">
              <Shield className="h-5 w-5 text-ink" />
            </div>
            <h2 className="headline text-ink">Notre Mission</h2>
          </div>
          <p className="body-lg text-ink-muted leading-relaxed">
            NullTrace est né de la conviction que les outils de reconnaissance OSINT doivent être accessibles, transparents et éthiques. Développé par Félix TOVIGNAN dans le cadre de la communauté Dark Packet, ce projet s'adresse aux étudiants, chercheurs et professionnels de la cybersécurité.
          </p>
        </div>

        <div className="framer-card border border-hairline hover:border-hairline-soft transition-colors">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-10 w-10 rounded-full bg-surface-2 flex items-center justify-center">
              <Heart className="h-5 w-5 text-ink" />
            </div>
            <h2 className="headline text-ink">Éthique</h2>
          </div>
          <p className="body-lg text-ink-muted leading-relaxed">
            NullTrace utilise uniquement des données publiquement disponibles. Aucune donnée personnelle n'est stockée. Nous croyons en un web ouvert où l'accès à l'information sécuritaire permet de mieux protéger les infrastructures et les individus.
          </p>
        </div>
      </section>

      <section className="space-y-8">
        <h2 className="display-md text-ink text-center">Stack Technique</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {[
            "Next.js 14", "React 18", "TypeScript", "Tailwind CSS",
            "Rust", "Axum", "Docker", "PostgreSQL"
          ].map((tech) => (
            <div key={tech} className="framer-card border border-hairline text-center py-6">
              <span className="body-sm text-ink">{tech}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="flex flex-col items-center space-y-8 pb-10">
        <h2 className="display-md text-ink">L'Auteur</h2>
        <div className="spotlight-coral w-full max-w-2xl text-center">
          <div className="h-24 w-24 rounded-full bg-inverse-canvas mx-auto flex items-center justify-center overflow-hidden mb-6">
            <Code className="h-10 w-10 text-inverse-ink" />
          </div>
          <h3 className="display-md text-ink mb-2">Félix TOVIGNAN<br/><span className="text-ink/70">VISCHENZISCH</span></h3>
          <p className="body-lg text-ink/90 mb-2">Étudiant en cybersécurité (L2 IFRI, UAC, Bénin)</p>
          <div className="inline-block bg-inverse-canvas/20 text-ink caption px-3 py-1 rounded-full mb-8">
            Fondateur de Dark Packet
          </div>
          <div className="flex items-center justify-center gap-4">
            <a href="https://github.com/VISCHENZISCH" target="_blank" rel="noopener noreferrer" className="btn-translucent">
              <Code className="h-4 w-4 mr-2" /> GitHub
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="btn-translucent">
              <User className="h-4 w-4 mr-2" /> LinkedIn
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
