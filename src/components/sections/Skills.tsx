import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { SKILLS_DEV, SKILLS_MARKETING } from "@/lib/constants";

export function Skills() {
  return (
    <section id="habilidades" className="py-24 lg:py-32 bg-surface">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <ScrollReveal>
          <SectionTitle
            label="Especialidades"
            title="Minhas habilidades"
            description="Domínio técnico e estratégico para entregar soluções completas."
          />
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Dev Skills */}
          <ScrollReveal variant="left">
            <div className="p-8 border border-border bg-surface-card gold-glow">
              <div className="flex items-center gap-3 mb-8">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-gold">
                  <polyline points="16 18 22 12 16 6" />
                  <polyline points="8 6 2 12 8 18" />
                </svg>
                <h3 className="font-display text-2xl font-bold text-foreground">
                  Desenvolvimento & Tecnologia
                </h3>
              </div>

              <div className="space-y-4">
                {SKILLS_DEV.map((skill, i) => (
                  <div key={skill} className="group flex items-center gap-4">
                    <span className="font-mono text-xs text-subtle w-6">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div className="flex-1 flex items-center gap-3">
                      <div className="w-1.5 h-1.5 bg-gold group-hover:scale-150 transition-transform" />
                      <span className="text-muted group-hover:text-foreground transition-colors">
                        {skill}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Marketing Skills */}
          <ScrollReveal variant="right">
            <div className="p-8 border border-border bg-surface-card gold-glow">
              <div className="flex items-center gap-3 mb-8">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-gold">
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                </svg>
                <h3 className="font-display text-2xl font-bold text-foreground">
                  Marketing & Vendas
                </h3>
              </div>

              <div className="space-y-4">
                {SKILLS_MARKETING.map((skill, i) => (
                  <div key={skill} className="group flex items-center gap-4">
                    <span className="font-mono text-xs text-subtle w-6">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div className="flex-1 flex items-center gap-3">
                      <div className="w-1.5 h-1.5 bg-gold group-hover:scale-150 transition-transform" />
                      <span className="text-muted group-hover:text-foreground transition-colors">
                        {skill}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
