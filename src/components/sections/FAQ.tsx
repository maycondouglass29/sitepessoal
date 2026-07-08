"use client";

import { useState } from "react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { FAQ_ITEMS } from "@/lib/constants";

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`w-5 h-5 text-gold transition-transform duration-300 ${
        open ? "rotate-180" : ""
      }`}
    >
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 lg:py-32">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <ScrollReveal>
          <SectionTitle
            label="FAQ"
            title="Perguntas frequentes"
            description="Respostas para as dúvidas mais comuns sobre meus serviços."
          />
        </ScrollReveal>

        <div className="space-y-2">
          {FAQ_ITEMS.map((item, i) => (
            <ScrollReveal key={i} delay={Math.min(i + 1, 6)}>
              <div className="border border-border gold-glow">
                <button
                  onClick={() => toggle(i)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left cursor-pointer"
                  aria-expanded={openIndex === i}
                >
                  <span className="font-medium text-foreground pr-4">
                    {item.question}
                  </span>
                  <ChevronIcon open={openIndex === i} />
                </button>

                <div
                  className={`overflow-hidden transition-all duration-500 ${
                    openIndex === i ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-6 pb-5 text-muted leading-relaxed border-t border-border/50 pt-4">
                    {item.answer}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
