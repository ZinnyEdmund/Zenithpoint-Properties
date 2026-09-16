import SectionLabel from "@/components/ui/SectionLabel";
import Button from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] flex-col items-center justify-center pt-32 text-center">
      <SectionLabel>404</SectionLabel>
      <h1 className="mt-2 font-serif text-h1 font-normal sm:text-h1-lg">Page not found.</h1>
      <p className="mt-3 max-w-[420px] text-body-sm text-muted">
        The page you're looking for doesn't exist or may have moved.
      </p>
      <Button to="/" className="mt-7">
        Back to Home
      </Button>
    </section>
  );
}
