export default function DreamMoment() {
  return (
    <section className="relative flex min-h-[64vh] items-center justify-center overflow-hidden py-24 text-center text-white">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1523217582562-09d0def993a6?q=80&w=1800&auto=format&fit=crop"
          alt="Modern property exterior at dusk"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/60 via-navy/35 to-navy/90" />
      </div>

      <div className="relative z-10 mx-auto max-w-[820px] px-6">
        <h2 className="font-serif text-h1 font-normal leading-[1.18] text-white sm:text-h1-lg lg:text-[54px]">
          ZenithPoint is the right choice for your big dream.
        </h2>
        <p className="mt-6 font-serif text-[20px] italic text-white/75 sm:text-h3">
          We make your dream come home.
        </p>
      </div>
    </section>
  );
}
