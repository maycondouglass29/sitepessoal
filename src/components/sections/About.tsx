import Image from "next/image";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { BUSINESS, CERTIFICATIONS } from "@/lib/constants";

export function About() {
  return (
    <section id="sobre" className="py-24 lg:py-32 bg-surface">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <ScrollReveal>
          <SectionTitle
            label="Sobre"
            title="Quem está por trás do código"
            description="Tecnologia + Estratégia Comercial: o melhor dos dois mundos."
          />
        </ScrollReveal>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-start">
          {/* Photo / Visual */}
          <ScrollReveal variant="left" className="lg:col-span-2">
            <div className="relative">
              <div className="aspect-[3/4] bg-gradient-to-br from-surface-elevated to-background border border-border overflow-hidden">
                <Image
                  src="/images/profile-about.jpg"
                  alt={`${BUSINESS.name} — Desenvolvedor Full Stack e Especialista em Marketing Digital`}
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </div>
              <div className="absolute top-0 left-0 w-8 h-8 border-l-2 border-t-2 border-gold" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-r-2 border-b-2 border-gold" />
              <div className="absolute -bottom-4 -right-4 w-full h-full border border-gold/20 -z-10" />
            </div>
          </ScrollReveal>

          {/* Bio */}
          <div className="lg:col-span-3 space-y-8">
            {BUSINESS.aboutText.map((paragraph, i) => (
              <ScrollReveal key={i} variant="right" delay={i + 1}>
                <p className="text-lg text-muted leading-relaxed">
                  {paragraph}
                </p>
              </ScrollReveal>
            ))}

            {/* Certifications */}
            <ScrollReveal variant="right" delay={3}>
              <div>
                <h3 className="font-mono text-sm tracking-[0.15em] uppercase text-subtle mb-4">
                  Certificações
                </h3>
                <div className="space-y-3">
                  {CERTIFICATIONS.map((cert) => (
                    <div
                      key={cert.name}
                      className="flex items-center gap-3 text-sm"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        className="w-5 h-5 text-gold shrink-0"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
                        />
                      </svg>
                      <span className="text-foreground">{cert.name}</span>
                      <span className="text-subtle">— {cert.issuer}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            {/* Quick Stats */}
            <ScrollReveal variant="right" delay={4}>
              <div className="grid grid-cols-3 gap-6 pt-6 border-t border-border">
                {[
                  { value: "5+", label: "Anos Exp." },
                  { value: "2", label: "Empresas Fundadas" },
                  { value: "100%", label: "Dedicação" },
                ].map((stat) => (
                  <div key={stat.label}>
                    <div className="font-display text-2xl font-bold text-gold">
                      {stat.value}
                    </div>
                    <div className="text-sm text-subtle mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
