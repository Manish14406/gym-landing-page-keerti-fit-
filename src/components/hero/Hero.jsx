import PrimaryHeading from "../headings/PrimaryHeading";
import Share from "./Share";
import heroBg from "../../images/hero/bg-hero-athlete.jpg";
import heroBadge from "../../images/hero/image.png";

function Hero() {
  return (
    <section className="relative z-[2] mt-[-93px] flex min-h-[100dvh] xl:h-[110dvh] items-center px-4 sm:px-10 xl:px-20 text-center xl:text-left overflow-hidden pt-28 pb-16 xl:py-0">
      {/* Background Image Layer: brighter tone with responsive focal positioning & choreographed reveal */}
      <div className="absolute inset-0 -z-10 overflow-hidden anim-hero-bg">
        <img
          src={heroBg}
          alt="Keerthi Fitness Gym"
          loading="eager"
          decoding="async"
          className="h-full w-full object-cover object-[30%_center] xl:object-center select-none brightness-115 contrast-105"
        />
        {/* Lighter Gradient Overlay: lets more background detail & lighting shine through */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/90 via-[#0a0a0a]/50 to-black/20 xl:bg-gradient-to-r xl:from-black/15 xl:via-black/45 xl:to-[#0a0a0a]/85" />
      </div>

      <div className="3xl:before:clip-path-hero 3xl:after:clip-path-hero container relative flex h-full items-center justify-center xl:justify-end 3xl:before:absolute 3xl:before:bottom-0 3xl:before:right-[270px] 3xl:before:h-[60%] 3xl:before:w-[450px] 3xl:before:animate-pulse 3xl:before:bg-[linear-gradient(rgba(255,85,0,1),rgba(255,85,0,0.3))] 3xl:after:absolute 3xl:after:bottom-0 3xl:after:right-[100px] 3xl:after:h-[75%] 3xl:after:w-[500px] 3xl:after:animate-pulse 3xl:after:bg-[linear-gradient(rgba(255,85,0,1),rgba(255,85,0,0.3))]">
        <div className="relative z-10 grid xl:grid-cols-[1fr,250px]">
          <div className="space-y-6 xl:justify-self-end">
            <PrimaryHeading />

            <p className="anim-pop-subtitle font-medium text-white/70 text-sm tracking-wide">
              Since 2006 · Kattigenahalli, Bangalore
            </p>

            <div className="anim-pop-buttons flex flex-wrap items-center justify-center gap-4 xl:justify-start">
              <a
                href="https://wa.me/919901321224?text=Hi%20Keerthi%20Fitness%2C%20I%20would%20like%20to%20know%20more%20about%20the%20membership%20plans."
                target="_blank"
                rel="noopener noreferrer"
                className="focus relative inline-flex items-center gap-1.5 border-2 border-red bg-red px-8 py-4 text-sm font-bold uppercase text-white shadow-lg shadow-orange/30 transition-all duration-300 hover:bg-matte-black hover:border-red hover:text-white"
              >
                Join Now
              </a>
              <a
                href="tel:+919901321224"
                className="focus relative inline-flex items-center gap-1.5 border-2 border-red bg-matte-black px-8 py-4 text-sm font-bold uppercase text-white shadow-lg transition-all duration-300 hover:bg-red hover:border-red hover:text-white"
              >
                Contact Us
              </a>
            </div>

            {/* Transform Motivational Badge below buttons */}
            <div className="anim-pop-badge flex justify-center xl:justify-start pt-1">
              <img
                src={heroBadge}
                alt="Transform Your Body, Transform Your Life"
                className="w-44 sm:w-56 xl:w-64 h-auto object-contain drop-shadow-[0_8px_24px_rgba(0,0,0,0.8)] transition-transform duration-300 hover:scale-105"
              />
            </div>
          </div>

          <div className="anim-pop-share">
            <Share />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
