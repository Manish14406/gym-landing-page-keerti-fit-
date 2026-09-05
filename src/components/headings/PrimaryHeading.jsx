function PrimaryHeading() {
  const keerthi = "KEERTHI".split("");
  const fitness = "FITNESS".split("");

  return (
    <h1 className="hero-font leading-none select-none">
      {/* KEERTHI — metallic silver, popping letter by letter */}
      <span
        className="block text-[clamp(2.35rem,11vw,7rem)] uppercase overflow-visible whitespace-nowrap"
        aria-label="KEERTHI"
      >
        {keerthi.map((letter, idx) => (
          <span
            key={`k-${idx}`}
            className="hero-text-keerthi inline-block anim-letter-pop"
            style={{ animationDelay: `${0.02 + idx * 0.035}s` }}
          >
            {letter}
          </span>
        ))}
      </span>

      {/* FITNESS — fiery orange, popping letter by letter */}
      <span
        className="block text-[clamp(2.35rem,11vw,7rem)] uppercase overflow-visible whitespace-nowrap"
        aria-label="FITNESS"
      >
        {fitness.map((letter, idx) => (
          <span
            key={`f-${idx}`}
            className="hero-text-fitness inline-block anim-letter-pop"
            style={{ animationDelay: `${0.15 + idx * 0.035}s` }}
          >
            {letter}
          </span>
        ))}
      </span>

      {/* Tagline — white, small, spaced */}
      <span className="anim-pop-tagline block mt-3 text-[clamp(0.65rem,2.5vw,1rem)] font-semibold tracking-[0.3em] text-white/80 uppercase">
        Your Fitness, Our Mission
      </span>
    </h1>
  );
}

export default PrimaryHeading;
