import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { QUALITIES } from "@/lib/constants";

const ICONS: Record<string, React.ReactNode> = {
  rocket: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 00-2.91-.09zM12 15l-3-3a22 22 0 012-3.95A12.88 12.88 0 0122 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 01-4 2z" />
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
    </svg>
  ),
  brain: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
      <path d="M12 2a4 4 0 0 0-4 4v1a4 4 0 0 0-4 4 4 4 0 0 0 2.5 3.7V19a3 3 0 0 0 3 3h5a3 3 0 0 0 3-3v-4.3A4 4 0 0 0 20 11a4 4 0 0 0-4-4V6a4 4 0 0 0-4-4z" />
      <path d="M12 2v20" />
    </svg>
  ),
  target: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  ),
  shield: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  ),
  users: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  ),
};

export function Qualities() {
  return (
    <section id="diferenciais" className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <ScrollReveal>
          <SectionTitle
            label="Diferenciais"
            title="Por que trabalhar comigo"
            description="Qualidades que me diferenciam no mercado e garantem resultados para o seu projeto."
          />
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {QUALITIES.map((q, i) => (
            <ScrollReveal key={q.id} variant="scale" delay={Math.min(i + 1, 6)}>
              <article className={`group relative p-8 bg-surface-card border border-border gold-glow h-full flex flex-col ${
                i === 0 ? "sm:col-span-2 lg:col-span-1" : ""
              }`}>
                <span className="absolute top-4 right-4 font-mono text-xs text-subtle">
                  {String(i + 1).padStart(2, "0")}
                </span>

                <div className="text-gold mb-6 group-hover:scale-110 transition-transform duration-300">
                  {ICONS[q.icon] || ICONS.target}
                </div>

                <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                  {q.title}
                </h3>

                <p className="text-muted text-sm leading-relaxed flex-1">
                  {q.description}
                </p>

                <div className="mt-6 w-0 h-[2px] bg-gradient-to-r from-gold to-gold-light group-hover:w-full transition-all duration-500" />
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
