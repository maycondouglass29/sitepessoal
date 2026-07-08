"use client";

import { useState } from "react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { BUSINESS } from "@/lib/constants";
import { Button } from "@/components/ui/Button";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setTimeout(() => {
      setStatus("sent");
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setStatus("idle"), 3000);
    }, 1000);
  };

  return (
    <section id="contato" className="py-24 lg:py-32 bg-surface">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <ScrollReveal>
          <SectionTitle
            label="Contato"
            title="Vamos conversar?"
            description="Tem um projeto em mente? Entre em contato e vamos transformar sua ideia em realidade."
          />
        </ScrollReveal>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Contact Info */}
          <ScrollReveal variant="left" className="lg:col-span-2 space-y-8">
            <div>
              <h3 className="font-mono text-sm tracking-[0.15em] uppercase text-subtle mb-2">
                Email
              </h3>
              <a
                href={`mailto:${BUSINESS.email}`}
                className="text-foreground hover:text-gold transition-colors gold-line"
              >
                {BUSINESS.email}
              </a>
            </div>

            <div>
              <h3 className="font-mono text-sm tracking-[0.15em] uppercase text-subtle mb-2">
                Telefone
              </h3>
              <a
                href={`tel:+55${BUSINESS.phone.replace(/\D/g, "")}`}
                className="text-foreground hover:text-gold transition-colors gold-line"
              >
                {BUSINESS.phone}
              </a>
            </div>

            <div>
              <h3 className="font-mono text-sm tracking-[0.15em] uppercase text-subtle mb-2">
                WhatsApp
              </h3>
              <a
                href={`https://wa.me/${BUSINESS.whatsapp}?text=Olá Maycon! Gostaria de saber mais sobre seus serviços de desenvolvimento e marketing digital.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 bg-[#25D366]/10 text-[#25D366] border border-[#25D366]/30 hover:bg-[#25D366]/20 transition-colors"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Chamar no WhatsApp
              </a>
            </div>

            <div>
              <h3 className="font-mono text-sm tracking-[0.15em] uppercase text-subtle mb-2">
                Localização
              </h3>
              <p className="text-muted">
                {BUSINESS.address.city}, {BUSINESS.address.state}
              </p>
            </div>

            <div>
              <h3 className="font-mono text-sm tracking-[0.15em] uppercase text-subtle mb-2">
                Horário de Atendimento
              </h3>
              <p className="text-muted">Segunda a Sexta: 09:00 — 18:00</p>
            </div>

            <div className="flex gap-4 pt-4">
              {Object.entries(BUSINESS.social).map(([name, url]) => (
                <a
                  key={name}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center border border-border text-muted hover:text-gold hover:border-gold transition-colors"
                  aria-label={name}
                >
                  <span className="font-mono text-xs uppercase">{name.slice(0, 2)}</span>
                </a>
              ))}
            </div>
          </ScrollReveal>

          {/* Contact Form */}
          <ScrollReveal variant="right" className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="contact-name" className="block font-mono text-sm tracking-[0.1em] uppercase text-subtle mb-2">
                  Nome
                </label>
                <input
                  id="contact-name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-background border border-border text-foreground placeholder:text-subtle focus:border-gold focus:outline-none transition-colors"
                  placeholder="Seu nome completo"
                />
              </div>
              <div>
                <label htmlFor="contact-email" className="block font-mono text-sm tracking-[0.1em] uppercase text-subtle mb-2">
                  Email
                </label>
                <input
                  id="contact-email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 bg-background border border-border text-foreground placeholder:text-subtle focus:border-gold focus:outline-none transition-colors"
                  placeholder="seu@email.com"
                />
              </div>
              <div>
                <label htmlFor="contact-message" className="block font-mono text-sm tracking-[0.1em] uppercase text-subtle mb-2">
                  Mensagem
                </label>
                <textarea
                  id="contact-message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 bg-background border border-border text-foreground placeholder:text-subtle focus:border-gold focus:outline-none transition-colors resize-none"
                  placeholder="Descreva seu projeto ou dúvida..."
                />
              </div>
              <Button type="submit" size="lg" className="w-full" disabled={status === "sending"}>
                {status === "idle" && "Enviar Mensagem"}
                {status === "sending" && "Enviando..."}
                {status === "sent" && "✓ Mensagem Enviada!"}
              </Button>
            </form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
