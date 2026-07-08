"use client";

import { useState } from "react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { EXPERIENCE } from "@/lib/constants";

export function Experience() {
  const [expandedId, setExpandedId] = useState<number | null>(1);

  return (
    <section id="experiencia" className="py-24 lg:py-32">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <ScrollReveal>
          <SectionTitle
            label="Experiência"
            title="Trajetória profissional"
            description="Do atendimento ao público à fundação de SaaS — uma jornada de evolução constante."
          />
        </ScrollReveal>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 sm:left-6 top-0 bottom-0 w-[1px] bg-border" />

          <div className="space-y-4">
            {EXPERIENCE.map((exp, i) => {
              const isExpanded = expandedId === exp.id;

              return (
                <ScrollReveal key={exp.id} delay={Math.min(i + 1, 6)}>
                  <div className="relative pl-12 sm:pl-16">
                    {/* Timeline Dot */}
                    <div
                      className={`absolute left-[11px] sm:left-[19px] top-7 w-3 h-3 transition-colors duration-300 ${
                        exp.current ? "bg-gold" : isExpanded ? "bg-gold/60" : "bg-border"
                      }`}
                    />

                    {/* Card */}
                    <article
                      className={`border gold-glow transition-all duration-300 ${
                        isExpanded
                          ? "border-gold/30 bg-surface-card"
                          : "border-border bg-surface-card/50 hover:bg-surface-card"
                      }`}
                    >
                      {/* Header — always visible, clickable */}
                      <button
                        onClick={() => setExpandedId(isExpanded ? null : exp.id)}
                        className="w-full text-left p-6 cursor-pointer flex items-start justify-between gap-4"
                      >
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 flex-wrap mb-1">
                            <h3 className="font-display text-lg font-bold text-foreground">
                              {exp.company}
                            </h3>
                            {exp.current && (
                              <span className="px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider bg-gold/10 text-gold border border-gold/30">
                                Atual
                              </span>
                            )}
                          </div>
                          <p className="text-gold text-sm font-medium">{exp.role}</p>
                          <p className="text-muted text-sm mt-1 line-clamp-2">
                            {exp.description}
                          </p>
                        </div>

                        <div className="flex flex-col items-end gap-2 shrink-0">
                          <span className="font-mono text-xs text-subtle whitespace-nowrap">
                            {exp.period}
                          </span>
                          <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className={`w-4 h-4 text-subtle transition-transform duration-300 ${
                              isExpanded ? "rotate-180" : ""
                            }`}
                          >
                            <polyline points="6 9 12 15 18 9" />
                          </svg>
                        </div>
                      </button>

                      {/* Expanded Content */}
                      <div
                        className={`overflow-hidden transition-all duration-500 ${
                          isExpanded
                            ? "max-h-[600px] opacity-100"
                            : "max-h-0 opacity-0"
                        }`}
                      >
                        <div className="px-6 pb-6 space-y-4 border-t border-border/50 pt-4">
                          {/* Highlights */}
                          <ul className="space-y-2">
                            {exp.highlights.map((h, hi) => (
                              <li
                                key={hi}
                                className="flex items-start gap-2 text-sm text-muted"
                              >
                                <span className="w-1.5 h-1.5 bg-gold mt-1.5 shrink-0" />
                                {h}
                              </li>
                            ))}
                          </ul>

                          {/* Tech */}
                          <div className="flex flex-wrap gap-1.5 pt-2">
                            {exp.tech.map((t) => (
                              <span
                                key={t}
                                className="px-2 py-0.5 text-[11px] font-mono text-subtle border border-border"
                              >
                                {t}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </article>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>

        {/* Summary */}
        <ScrollReveal>
          <div className="mt-12 pt-8 border-t border-border grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
            {[
              { value: "8", label: "Projetos" },
              { value: "14+", label: "Anos de Carreira" },
              { value: "4", label: "SaaS Criados" },
              { value: "3", label: "IAs Integradas" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="font-display text-2xl font-bold text-gold">
                  {stat.value}
                </div>
                <div className="text-sm text-muted mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
