interface SectionLabelProps {
  children: string;
  /** Use "dark" on navy/image backgrounds. Defaults to the standard muted tone. */
  tone?: "default" | "dark";
  className?: string;
}

// The small uppercase eyebrow ("What We Do", "Featured Properties", ...)
// that opens nearly every section. Same three classes were repeated by
// hand in ~18 places — this is the one definition.
export default function SectionLabel({ children, tone = "default", className = "" }: SectionLabelProps) {
  return (
    <span
      className={`text-caption font-bold uppercase tracking-[0.08em] ${
        tone === "dark" ? "text-white/60" : "text-muted"
      } ${className}`}
    >
      {children}
    </span>
  );
}
