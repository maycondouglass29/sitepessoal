"use client";

import { useEffect, useState } from "react";
import { BUSINESS } from "@/lib/constants";
import { Button } from "@/components/ui/Button";

export function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const firstName = BUSINESS.name.split(" ")[0];
  const lastName = BUSINESS.name.split(" ")[1];

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
    >
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03]" aria-hidden="true">
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              "linear-gradient(var(--gold-primary) 1px, transparent 1px), linear-gradient(90deg, var(--gold-primary) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      {/* Diagonal Gold Accent Line */}
      <div
        className="absolute top-0 right-0 w-[1px] h-[140%] bg-gradient-to-b from-transparent via-gold/30 to-transparent origin-top-right -rotate-[25deg] translate-x-[-30vw]"
        aria-hidden="true"
      />

      {/* Corner Accents */}
      <div
        className="absolute top-8 left-8 w-12 h-12 border-l-2 border-t-2 border-gold/30 transition-opacity duration-1000"
        style={{ opacity: mounted ? 0.6 : 0 }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-8 right-8 w-12 h-12 border-r-2 border-b-2 border-gold/30 transition-opacity duration-1000"
        style={{ opacity: mounted ? 0.6 : 0 }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full pt-32 pb-20">
        {/* Label */}
        <div
          className="mb-8 transition-all duration-700"
          style={{
            opacity: mounted ? 1 : 0,
            transform: mounted ? "translateY(0)" : "translateY(20px)",
          }}
        >
          <span className="inline-flex items-center gap-2 font-mono text-xs sm:text-sm tracking-[0.25em] uppercase text-gold/80">
            <span className="w-8 h-[1px] bg-gold/50" />
            {BUSINESS.title}
          </span>
        </div>

        {/* Name — Massive Typography */}
        <h1 className="font-display font-bold leading-[0.9] tracking-tighter mb-8">
          <span
            className="block text-foreground transition-all duration-700"
            style={{
              opacity: mounted ? 1 : 0,
              transform: mounted ? "translateY(0)" : "translateY(60px)",
              transitionDelay: "200ms",
              fontSize: "clamp(3rem, 12vw, 10rem)",
            }}
          >
            {firstName}
          </span>
          <span
            className="block text-gold transition-all duration-700"
            style={{
              opacity: mounted ? 1 : 0,
              transform: mounted ? "translateY(0)" : "translateY(60px)",
              transitionDelay: "350ms",
              fontSize: "clamp(3rem, 12vw, 10rem)",
            }}
          >
            {lastName}
          </span>
        </h1>

        {/* Tagline */}
        <p
          className="max-w-2xl text-lg sm:text-xl text-muted leading-relaxed mb-12 transition-all duration-700"
          style={{
            opacity: mounted ? 1 : 0,
            transform: mounted ? "translateY(0)" : "translateY(30px)",
            transitionDelay: "600ms",
          }}
        >
          {BUSINESS.tagline}
        </p>

        {/* CTAs */}
        <div
          className="flex flex-col sm:flex-row gap-4 transition-all duration-700"
          style={{
            opacity: mounted ? 1 : 0,
            transform: mounted ? "translateY(0)" : "translateY(30px)",
            transitionDelay: "800ms",
          }}
        >
          <Button href="#contato" size="lg">
            Fale Comigo
          </Button>
          <Button href="#experiencia" variant="outline" size="lg">
            Ver Projetos
          </Button>
        </div>

        {/* Dual Profile Tags */}
        <div
          className="mt-20 pt-8 border-t border-border flex flex-wrap gap-6 transition-all duration-700"
          style={{
            opacity: mounted ? 1 : 0,
            transitionDelay: "1000ms",
          }}
        >
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 bg-gold" />
            <span className="font-mono text-sm text-muted">Full Stack Developer</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 bg-gold" />
            <span className="font-mono text-sm text-muted">SaaS Founder</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 bg-gold" />
            <span className="font-mono text-sm text-muted">Google Ads Certified</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 bg-gold" />
            <span className="font-mono text-sm text-muted">Meta Ads Certified</span>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 transition-all duration-700"
        style={{ opacity: mounted ? 0.5 : 0, transitionDelay: "1200ms" }}
      >
        <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-subtle">
          Scroll
        </span>
        <div className="w-[1px] h-8 bg-gradient-to-b from-gold/50 to-transparent animate-pulse" />
      </div>
    </section>
  );
}
