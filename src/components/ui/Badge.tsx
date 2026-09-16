import { ReactNode } from "react";

type BadgeTone = "light" | "navy" | "zenith" | "glass-navy" | "glass-light" | "custom";
type BadgeSize = "sm" | "md";

interface BadgeProps {
  children: ReactNode;
  /** "custom" applies no built-in color classes — pass the colors via className instead. */
  tone?: BadgeTone;
  size?: BadgeSize;
  className?: string;
}

// The small uppercase pill used for status/featured/category labels on
// property cards, project cards, and hero images. Every one of these
// pills shared the same rounded-full/uppercase/tracking-wide skeleton
// and only varied by background + size — this consolidates that.
const toneClasses: Record<BadgeTone, string> = {
  light: "bg-white text-navy",
  navy: "bg-navy text-white",
  zenith: "bg-zenith text-white",
  "glass-navy": "border border-white/20 bg-navy/85 text-white backdrop-blur-sm",
  "glass-light": "border border-white/25 bg-white/10 text-white backdrop-blur-sm",
  custom: "",
};

const sizeClasses: Record<BadgeSize, string> = {
  sm: "px-2.5 py-1.5 text-micro",
  md: "px-3.5 py-2 text-label",
};

export default function Badge({ children, tone = "light", size = "sm", className = "" }: BadgeProps) {
  return (
    <span
      className={`inline-block whitespace-nowrap rounded-full font-bold uppercase tracking-wide ${toneClasses[tone]} ${sizeClasses[size]} ${className}`}
    >
      {children}
    </span>
  );
}
