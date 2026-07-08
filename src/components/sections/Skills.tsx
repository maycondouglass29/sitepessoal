import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionTitle } from "@/components/ui/SectionTitle";
import {
  SKILLS_FRONTEND,
  SKILLS_BACKEND,
  SKILLS_AI,
  SKILLS_MARKETING,
} from "@/lib/constants";

const SKILL_CATEGORIES = [
  {
    title: "Frontend & Design",
    skills: SKILLS_FRONTEND,
    variant: "left" as const,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-gold">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
  {
    title: "Backend & Infraestrutura",
    skills: SKILLS_BACKEND,
    variant: "right" as const,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-gold">
        <rect x="2" y="2" width="20" height="8" rx="2" />
        <rect x="2" y="14" width="20" height="8" rx="2" />
        <line x1="6" y1="6" x2="6.01" y2="6" />
        <line x1="6" y1="18" x2="6.01" y2="18" />
      </svg>
    ),
  },
  {
    title: "Inteligência Artificial",
    skills: SKILLS_AI,
    variant: "left" as const,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-gold">
        <path d="M12 2a4 4 0 0 1 4 4v1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2V6a4 4 0 0 1 4-4z" />
        <path d="M9 14v4a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-4" />
        <circle cx="10" cy="8" r="1" />
        <circle cx="14" cy="8" r="1" />
      </svg>
    ),
  },
  {
    title: "Marketing & Growth",
    skills: SKILLS_MARKETING,
    variant: "right" as const,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-gold">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
  },
];

export function Skills() {
  return (
    <section id="habilidades" className="py-24 lg:py-32 bg-surface">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <ScrollReveal>
          <SectionTitle
            label="Especialidades"
            title="Minhas habilidades"
            description="Domínio técnico e estratégico para entregar soluções completas — do código à conversão."
          />
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-8">
          {SKILL_CATEGORIES.map((category) => (
            <ScrollReveal key={category.title} variant={category.variant}>
              <div className="p-8 border border-border bg-surface-card gold-glow h-full">
                <div className="flex items-center gap-3 mb-8">
                  {category.icon}
                  <h3 className="font-display text-xl font-bold text-foreground">
                    {category.title}
                  </h3>
                </div>

                <div className="space-y-3">
                  {category.skills.map((skill, i) => (
                    <div key={skill} className="group flex items-center gap-4">
                      <span className="font-mono text-xs text-subtle w-6">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div className="flex-1 flex items-center gap-3">
                        <div className="w-1.5 h-1.5 bg-gold group-hover:scale-150 transition-transform" />
                        <span className="text-muted text-sm group-hover:text-foreground transition-colors">
                          {skill}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
