import { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { Link, LinkProps } from "react-router-dom";

type Variant = "primary" | "ghost" | "outline";
type Size = "md" | "sm";

interface BaseProps {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
}

// Three ways to render the same visual button: an internal route (to),
// an external/anchor link (href — WhatsApp, mailto, tel), or a native
// <button> (form submit, onClick handlers). Consolidating this means
// every "looks like a button" element in the app actually is one,
// instead of hand-copied className strings scattered across pages.
type LinkVariant = BaseProps & { to: string; href?: undefined } & Omit<LinkProps, "to" | "className" | "children">;
type AnchorVariant = BaseProps & { href: string; to?: undefined } & Omit<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  "href" | "className" | "children"
>;
type NativeVariant = BaseProps & { to?: undefined; href?: undefined } & Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  "className" | "children"
>;

type ButtonProps = LinkVariant | AnchorVariant | NativeVariant;

// Blue is used ONLY on the primary variant — this is the site's single
// most important accent color, so it should be reserved for the action
// that actually matters in a given section.
const variantClasses: Record<Variant, string> = {
  primary: "bg-zenith text-white hover:bg-secondary",
  ghost: "border border-white/50 text-white hover:bg-white/10 hover:border-white",
  outline: "border border-line text-ink hover:border-zenith hover:text-zenith",
};

const sizeClasses: Record<Size, string> = {
  md: "px-7 py-3.75 text-body-sm",
  sm: "px-6 py-3.5 text-small",
};

const baseClasses =
  "inline-flex items-center justify-center gap-2.5 rounded-sm font-semibold transition-all duration-200 whitespace-nowrap";

export default function Button({ variant = "primary", size = "md", className = "", children, ...props }: ButtonProps) {
  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  if (props.to !== undefined) {
    const { to, ...rest } = props;
    return (
      <Link to={to} className={classes} {...rest}>
        {children}
      </Link>
    );
  }

  if (props.href !== undefined) {
    const { href, ...rest } = props;
    return (
      <a href={href} className={classes} {...rest}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  );
}
