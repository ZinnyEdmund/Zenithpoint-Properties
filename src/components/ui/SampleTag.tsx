interface SampleTagProps {
  label?: string;
}

// A small, honest label used above illustrative content (sample
// listings, sample project, sample testimonials) so it's obvious to
// anyone previewing the site what's real structure vs. stand-in copy.
export default function SampleTag({ label = "Sample content — for demonstration only" }: SampleTagProps) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-line bg-white px-3 py-1 text-micro font-semibold text-muted">
      <span className="h-1.5 w-1.5 rounded-full bg-zenith/60" />
      {label}
    </span>
  );
}
