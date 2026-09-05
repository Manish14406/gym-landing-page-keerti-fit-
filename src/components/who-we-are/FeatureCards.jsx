import progression from "../../images/who-we-are/progression.png";
import workout from "../../images/who-we-are/workout.png";
import nutritions from "../../images/who-we-are/nutritions.png";
import cardBg1 from "../../images/who-we-are/card-bg.webp";
import cardBg2 from "../../images/featured-class/meditation.webp";
import cardBg3 from "../../images/featured-class/cycling.webp";

const cardData = [
  {
    image: cardBg1,
    icon: progression,
    title: "Strength Training",
    description:
      "Build muscle, increase endurance, and transform your body with our comprehensive strength and weight training programs.",
  },
  {
    image: cardBg2,
    icon: workout,
    title: "Yoga",
    description:
      "Improve flexibility, balance, and mental well-being with our guided yoga sessions suitable for all fitness levels.",
  },
  {
    image: cardBg3,
    icon: nutritions,
    title: "Aerobics",
    description:
      "Burn calories, boost cardiovascular health, and stay energized with our high-energy aerobics classes for all levels.",
  },
];

function FeatureCards() {
  return (
    <div className="mt-[-50px] grid gap-8 2xl:grid-cols-3 2xl:gap-6">
      {cardData.map((card, idx) => (
        <div
          key={idx}
          className="group relative z-10 flex flex-col items-center gap-4 overflow-hidden rounded-br-3xl rounded-tl-3xl border-2 border-transparent px-6 py-12 text-center shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:border-red hover:shadow-[0_12px_32px_rgba(255,85,0,0.25)]"
        >
          {/* Background Photo — clearly visible and responsive */}
          <img
            src={card.image}
            alt={card.title}
            loading="lazy"
            decoding="async"
            className="absolute inset-0 -z-20 h-full w-full object-cover object-center brightness-110 contrast-105 transition-transform duration-700 group-hover:scale-110"
          />

          {/* Dark Athletic Gradient Overlay: lets photo shine through while keeping text 100% crisp */}
          <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black/95 via-black/70 to-black/45 transition-colors duration-300 group-hover:from-black/90 group-hover:via-black/60 group-hover:to-black/35" />

          {/* Red/Orange Icon with subtle hover bounce */}
          <img
            src={card.icon}
            alt={card.title}
            className="h-auto w-20 transition-transform duration-300 group-hover:scale-110 drop-shadow-[0_4px_12px_rgba(255,85,0,0.5)]"
          />

          {/* Bold White Heading */}
          <h5 className="text-2xl font-bold uppercase tracking-wide text-white drop-shadow">
            {card.title}
          </h5>

          {/* Clean Description */}
          <p className="font-medium text-white/90 text-sm leading-relaxed max-w-sm">
            {card.description}
          </p>
        </div>
      ))}
    </div>
  );
}

export default FeatureCards;
