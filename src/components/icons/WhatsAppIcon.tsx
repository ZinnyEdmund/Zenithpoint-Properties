interface WhatsAppIconProps {
  size?: number;
  className?: string;
}

// Was duplicated verbatim in WhatsAppButton.tsx and DevelopmentStory.tsx —
// this is now the one copy of the path data.
export default function WhatsAppIcon({ size = 24, className = "" }: WhatsAppIconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="#fff" className={className}>
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.29-1.39c1.43.78 3.05 1.2 4.75 1.2h.01c5.46 0 9.91-4.45 9.91-9.9C21.96 6.45 17.5 2 12.04 2zm5.81 14.03c-.24.68-1.4 1.3-1.93 1.38-.49.08-1.11.11-1.8-.11-.41-.13-.95-.3-1.63-.6-2.87-1.24-4.74-4.14-4.88-4.33-.14-.19-1.17-1.56-1.17-2.98 0-1.42.75-2.11 1.01-2.4.27-.29.58-.36.78-.36.19 0 .39 0 .56.01.18.01.42-.07.65.5.24.58.82 2 .89 2.14.07.14.12.31.02.5-.09.19-.14.31-.28.48-.14.17-.29.37-.42.5-.14.14-.28.29-.12.56.16.28.71 1.17 1.53 1.9 1.05.94 1.94 1.23 2.21 1.37.28.14.44.12.6-.07.16-.19.68-.79.87-1.06.19-.28.37-.23.63-.14.26.09 1.66.79 1.94.93.28.14.47.21.53.33.07.12.07.68-.17 1.36z" />
    </svg>
  );
}
