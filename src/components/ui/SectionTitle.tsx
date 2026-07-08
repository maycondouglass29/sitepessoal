interface SectionTitleProps {
  label: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export function SectionTitle({
  label,
  title,
  description,
  align = "center",
}: SectionTitleProps) {
  const alignClass = align === "center" ? "text-center items-center" : "text-left items-start";

  return (
    <div className={`flex flex-col gap-4 mb-16 ${alignClass}`}>
      <span className="font-mono text-sm tracking-[0.2em] uppercase text-gold">
        {label}
      </span>
      <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
        {title}
      </h2>
      {description && (
        <p className="max-w-2xl text-lg text-muted leading-relaxed">
          {description}
        </p>
      )}
      <div className="w-16 h-0.5 bg-gradient-to-r from-gold to-gold-light mt-2" />
    </div>
  );
}
