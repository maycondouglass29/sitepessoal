"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  variant?: "up" | "left" | "right" | "scale";
  delay?: number;
}

export function ScrollReveal({
  children,
  className = "",
  variant = "up",
  delay = 0,
}: ScrollRevealProps) {
  const ref = useScrollReveal();

  const variantClass = {
    up: "reveal",
    left: "reveal-left",
    right: "reveal-right",
    scale: "reveal-scale",
  }[variant];

  const staggerClass = delay > 0 ? `stagger-${Math.min(delay, 6)}` : "";

  return (
    <div
      ref={ref}
      className={`${variantClass} ${staggerClass} ${className}`}
    >
      {children}
    </div>
  );
}
