"use client";

import { useState, useEffect } from "react";
import { NAV_ITEMS, BUSINESS } from "@/lib/constants";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = NAV_ITEMS.map((item) => item.href.replace("#", ""));
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 150) {
          setActiveSection(id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        isScrolled
          ? "bg-background/90 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between h-16 lg:h-20">
        {/* Logo */}
        <a
          href="#hero"
          className="font-display font-bold text-xl tracking-tight text-foreground hover:text-gold transition-colors"
        >
          {BUSINESS.name.split(" ")[0]}
          <span className="text-gold">.</span>
        </a>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex items-center gap-1">
          {NAV_ITEMS.map((item) => {
            const sectionId = item.href.replace("#", "");
            const isActive = activeSection === sectionId;
            return (
              <li key={item.href}>
                <a
                  href={item.href}
                  className={`gold-line relative px-4 py-2 text-sm font-medium transition-colors ${
                    isActive ? "text-gold" : "text-muted hover:text-foreground"
                  }`}
                >
                  {item.label}
                </a>
              </li>
            );
          })}
        </ul>

        {/* CTA Desktop */}
        <a
          href="#contato"
          className="hidden lg:inline-flex items-center px-5 py-2.5 text-sm font-medium bg-gold text-background hover:bg-gold-light transition-colors cursor-pointer"
        >
          Fale Comigo
        </a>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          className="lg:hidden relative w-8 h-8 flex flex-col justify-center items-center gap-1.5 cursor-pointer"
          aria-label="Menu de navegação"
          aria-expanded={isMobileOpen}
        >
          <span
            className={`block w-6 h-0.5 bg-foreground transition-all duration-300 ${
              isMobileOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-foreground transition-all duration-300 ${
              isMobileOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-foreground transition-all duration-300 ${
              isMobileOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ${
          isMobileOpen ? "max-h-[400px] border-b border-border" : "max-h-0"
        }`}
      >
        <div className="bg-background/95 backdrop-blur-md px-6 py-6 space-y-1">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setIsMobileOpen(false)}
              className="block py-3 text-base font-medium text-muted hover:text-gold transition-colors border-b border-border/50 last:border-0"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contato"
            onClick={() => setIsMobileOpen(false)}
            className="block mt-4 py-3 text-center font-medium bg-gold text-background hover:bg-gold-light transition-colors"
          >
            Fale Comigo
          </a>
        </div>
      </div>
    </header>
  );
}
