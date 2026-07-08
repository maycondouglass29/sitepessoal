"use client";

import { useState, useEffect, useCallback } from "react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { TESTIMONIALS } from "@/lib/constants";

function StarIcon({ filled }: { filled: boolean }) {
  return (
    <svg
      viewBox="0 0 20 20"
      className={`w-4 h-4 ${filled ? "text-gold fill-gold" : "text-border"}`}
    >
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );
}

export function Testimonials() {
  const [active, setActive] = useState(0);

  const next = useCallback(() => {
    setActive((prev) => (prev + 1) % TESTIMONIALS.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section id="depoimentos" className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <ScrollReveal>
          <SectionTitle
            label="Depoimentos"
            title="O que meus clientes dizem"
            description="A satisfação dos clientes é meu maior indicador de sucesso."
          />
        </ScrollReveal>

        <ScrollReveal>
          <div className="max-w-3xl mx-auto">
            {/* Quote */}
            <div className="relative min-h-[250px] flex flex-col items-center text-center">
              {/* Decorative Quote Mark */}
              <span className="font-display text-8xl text-gold/15 leading-none select-none mb-4" aria-hidden="true">
                &ldquo;
              </span>

              {TESTIMONIALS.map((t, i) => (
                <div
                  key={t.id}
                  className={`absolute top-20 left-0 right-0 transition-all duration-700 ${
                    i === active
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-8 pointer-events-none"
                  }`}
                >
                  <blockquote className="text-lg sm:text-xl text-foreground leading-relaxed mb-8 italic">
                    &ldquo;{t.content}&rdquo;
                  </blockquote>

                  {/* Rating */}
                  <div className="flex justify-center gap-1 mb-4">
                    {Array.from({ length: 5 }).map((_, si) => (
                      <StarIcon key={si} filled={si < t.rating} />
                    ))}
                  </div>

                  {/* Author */}
                  <div>
                    <div className="font-semibold text-foreground">{t.name}</div>
                    <div className="text-sm text-muted">
                      {t.role} — {t.company}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Dots */}
            <div className="flex justify-center gap-3 mt-8">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`w-2 h-2 transition-all duration-300 cursor-pointer ${
                    i === active
                      ? "bg-gold w-8"
                      : "bg-border hover:bg-muted"
                  }`}
                  aria-label={`Depoimento ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
