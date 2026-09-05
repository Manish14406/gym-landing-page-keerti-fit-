import img from "../../images/choose-us/main.webp";
import play from "../../images/choose-us/play.png";

function Image() {
  return (
    <div className="relative flex before:absolute before:bottom-0 before:left-3 before:h-64 before:w-3 before:bg-red after:absolute after:bottom-0 after:right-8 after:top-[-30px] after:w-3 after:rotate-[-6deg] after:bg-red">
      <img
        src={img}
        alt="Keerthi Fitness Gym Training"
        loading="lazy"
        decoding="async"
        className="m-auto w-4/5"
      />
      <button
        aria-label="Play gym tour video"
        className="focus group absolute bottom-1/2 right-1/2 z-10 translate-x-1/2 translate-y-1/2 rounded-full border-2 border-red bg-matte-black p-4 shadow-2xl shadow-red/40 transition-all duration-300 hover:bg-red hover:scale-110"
      >
        <img src={play} alt="" aria-hidden="true" className="w-5 brightness-200 contrast-200" />
      </button>
    </div>
  );
}

export default Image;
