import { FaBars, FaPlus } from "react-icons/fa6";

const btnStyles = `hover:text-red text-white transition-colors duration-300 focus`;

function NavButtons({ onToggleNav}) {
  return (
    <div className="flex items-center justify-between gap-7">
      <button
        className={`3xl:hidden ${btnStyles} p-2 rounded`}
        onClick={onToggleNav}
        aria-label="Open navigation menu"
      >
        <FaBars className="h-7 w-7" />
      </button>
      <div className="focus hidden rounded-sm border-2 border-solid border-red/60 bg-matte-black p-1.5 transition-colors duration-300 hover:border-red lg:block">
        <a
          href="https://wa.me/919901321224?text=Hi%20Keerthi%20Fitness%2C%20I%20would%20like%20to%20know%20more%20about%20the%20membership%20plans."
          target="_blank"
          rel="noopener noreferrer"
          className="mr-2 flex items-center justify-between gap-2 text-sm font-bold uppercase text-white outline-none hover:text-red transition-colors duration-300"
        >
          <FaPlus className="h-8 w-8 rounded-sm bg-red p-2 text-white transition-transform duration-1000 hover:rotate-[360deg]" />
          Join Now
        </a>
      </div>
    </div>
  );
}

export default NavButtons;
