import { HTMLAttributes, ReactNode } from "react";

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

// The page's single content-width wrapper. This exact class string
// (max-w-wrap + responsive px) was hand-copied into ~28 places across
// the codebase — this component is the one place it's now defined.
export default function Container({ children, className = "", ...props }: ContainerProps) {
  return (
    <div className={`mx-auto max-w-wrap px-6 md:px-10 lg:px-14 ${className}`} {...props}>
      {children}
    </div>
  );
}
