"use client";

import { useState } from "react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { PROJECTS } from "@/lib/projects";

const CATEGORIES = ["Todos", ...new Set(PROJECTS.map((p) => p.category.split(" / ")[0]))];

export function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("Todos");
  const [expandedProject, setExpandedProject] = useState<string | null>(null);

  const filtered =
    activeCategory === "Todos"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category.startsWith(activeCategory));

  return (
    <section id="portfolio" className="py-24 lg:py-32 bg-surface">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <ScrollReveal>
          <SectionTitle
            label="Portfólio"
            title="Projetos em destaque"
            description="Uma seleção de projetos que demonstram minha expertise em desenvolvimento Full Stack, IA e marketing digital."
          />
        </ScrollReveal>

        {/* Filter Tabs */}
        <ScrollReveal>
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 text-sm font-mono tracking-wider transition-all duration-300 cursor-pointer ${
                  activeCategory === cat
                    ? "bg-gold text-background"
                    : "border border-border text-muted hover:text-foreground hover:border-gold/50"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {filtered.map((project, i) => (
            <ScrollReveal key={project.id} variant="up" delay={Math.min(i + 1, 6)}>
              <article
                className="group relative bg-surface-card border border-border gold-glow overflow-hidden flex flex-col h-full"
              >
                {/* Header Bar */}
                <div
                  className="h-1 w-full"
                  style={{ background: `linear-gradient(90deg, ${project.color}, ${project.color}88)` }}
                />

                {/* Thumbnail Area */}
                <div className="relative aspect-[16/9] bg-gradient-to-br from-surface-elevated to-background overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center space-y-2">
                      <span
                        className="font-display text-5xl font-bold opacity-20 group-hover:opacity-30 transition-opacity duration-500"
                        style={{ color: project.color }}
                      >
                        {project.title.split(" ").map((w) => w[0]).join("").slice(0, 3)}
                      </span>
                      <div className="flex justify-center gap-1">
                        <span
                          className="px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider border"
                          style={{
                            color: project.color,
                            borderColor: `${project.color}40`,
                            backgroundColor: `${project.color}10`,
                          }}
                        >
                          {project.status}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Info */}
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <div>
                      <span className="font-mono text-xs text-subtle">{project.category}</span>
                      <h3 className="font-display text-xl font-semibold text-foreground group-hover:text-gold transition-colors mt-1">
                        {project.title}
                      </h3>
                    </div>
                    <span className="font-mono text-xs text-subtle whitespace-nowrap">{project.year}</span>
                  </div>

                  <p className="text-muted text-sm leading-relaxed mb-4">
                    {project.shortDescription}
                  </p>

                  {/* Role */}
                  <p className="text-xs text-gold font-medium mb-4">
                    {project.role}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tech.slice(0, 6).map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 text-[11px] font-mono text-subtle border border-border"
                      >
                        {t}
                      </span>
                    ))}
                    {project.tech.length > 6 && (
                      <span className="px-2 py-0.5 text-[11px] font-mono text-subtle border border-border">
                        +{project.tech.length - 6}
                      </span>
                    )}
                  </div>

                  {/* Expand Button */}
                  <div className="mt-auto pt-4 border-t border-border/50">
                    <button
                      onClick={() =>
                        setExpandedProject(
                          expandedProject === project.id ? null : project.id
                        )
                      }
                      className="flex items-center gap-2 text-sm text-muted hover:text-gold transition-colors cursor-pointer group/btn"
                    >
                      <span>
                        {expandedProject === project.id
                          ? "Menos detalhes"
                          : "Ver detalhes"}
                      </span>
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className={`w-4 h-4 transition-transform duration-300 ${
                          expandedProject === project.id ? "rotate-180" : ""
                        }`}
                      >
                        <polyline points="6 9 12 15 18 9" />
                      </svg>
                    </button>
                  </div>

                  {/* Expanded Details */}
                  <div
                    className={`overflow-hidden transition-all duration-500 ${
                      expandedProject === project.id
                        ? "max-h-[800px] opacity-100 mt-4"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="space-y-4 pt-4 border-t border-border/50">
                      {/* Full Description */}
                      <p className="text-sm text-muted leading-relaxed">
                        {project.fullDescription}
                      </p>

                      {/* Impact */}
                      <div>
                        <h4 className="font-mono text-xs tracking-wider uppercase text-subtle mb-2">
                          Impacto & Resultados
                        </h4>
                        <ul className="space-y-1.5">
                          {project.impact.map((item, idx) => (
                            <li
                              key={idx}
                              className="flex items-start gap-2 text-sm text-muted"
                            >
                              <span
                                className="w-1 h-1 mt-2 shrink-0"
                                style={{ backgroundColor: project.color }}
                              />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Features */}
                      <div>
                        <h4 className="font-mono text-xs tracking-wider uppercase text-subtle mb-2">
                          Funcionalidades
                        </h4>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                          {project.features.map((feat, idx) => (
                            <li
                              key={idx}
                              className="flex items-start gap-2 text-sm text-muted"
                            >
                              <svg
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                className="w-3.5 h-3.5 mt-0.5 shrink-0"
                                style={{ color: project.color }}
                              >
                                <polyline points="20 6 9 17 4 12" />
                              </svg>
                              {feat}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Full Tech Stack */}
                      <div>
                        <h4 className="font-mono text-xs tracking-wider uppercase text-subtle mb-2">
                          Stack Completo
                        </h4>
                        <div className="flex flex-wrap gap-1.5">
                          {project.tech.map((t) => (
                            <span
                              key={t}
                              className="px-2 py-1 text-xs font-mono border border-border text-muted hover:text-foreground hover:border-gold/50 transition-colors"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>

        {/* Summary Stats */}
        <ScrollReveal>
          <div className="mt-16 pt-8 border-t border-border grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
            {[
              { value: "6", label: "Projetos" },
              { value: "4", label: "Plataformas SaaS" },
              { value: "3", label: "Com IA Integrada" },
              { value: "270+", label: "Componentes Criados" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="font-display text-3xl font-bold text-gold">
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
