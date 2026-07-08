import { BUSINESS, NAV_ITEMS } from "@/lib/constants";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <a href="#hero" className="font-display font-bold text-2xl text-foreground">
              {BUSINESS.name.split(" ")[0]}
              <span className="text-gold">.</span>
            </a>
            <p className="mt-4 text-muted text-sm leading-relaxed max-w-xs">
              {BUSINESS.title}. {BUSINESS.tagline.split(" ").slice(0, 10).join(" ")}...
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-mono text-sm tracking-[0.15em] uppercase text-subtle mb-4">
              Navegação
            </h4>
            <ul className="space-y-2">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-muted hover:text-gold transition-colors text-sm"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-mono text-sm tracking-[0.15em] uppercase text-subtle mb-4">
              Contato
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href={`mailto:${BUSINESS.email}`}
                  className="text-muted hover:text-gold transition-colors"
                >
                  {BUSINESS.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:+55${BUSINESS.phone.replace(/\D/g, "")}`}
                  className="text-muted hover:text-gold transition-colors"
                >
                  {BUSINESS.phone}
                </a>
              </li>
              <li>
                <a
                  href={`https://wa.me/${BUSINESS.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted hover:text-gold transition-colors"
                >
                  WhatsApp
                </a>
              </li>
              <li className="text-muted">
                {BUSINESS.address.city}, {BUSINESS.address.state}
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-mono text-sm tracking-[0.15em] uppercase text-subtle mb-4">
              Social
            </h4>
            <div className="flex gap-3">
              {Object.entries(BUSINESS.social).map(([name, url]) => (
                <a
                  key={name}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 flex items-center justify-center border border-border text-muted hover:text-gold hover:border-gold transition-colors"
                  aria-label={name}
                >
                  <span className="font-mono text-xs uppercase">
                    {name.slice(0, 2)}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-subtle">
            © {year} {BUSINESS.fullName}. Todos os direitos reservados.
          </p>
          <p className="text-sm text-subtle">
            Seg — Sex: 09:00 — 18:00
          </p>
        </div>
      </div>
    </footer>
  );
}
