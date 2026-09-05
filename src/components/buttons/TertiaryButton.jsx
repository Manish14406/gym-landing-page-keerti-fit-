import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";

function TertiaryButton({ to = "/", children }) {
  return (
    <Link
      to={to}
      className="group focus relative inline-flex items-center gap-2 border-2 border-red bg-red px-8 py-4 text-sm font-bold uppercase text-white shadow-lg shadow-orange/30 transition-all duration-300 hover:bg-matte-black hover:border-red hover:text-white"
    >
      <span>{children}</span>
      <FaArrowRight className="h-auto w-3.5 text-white transition-colors duration-300" />
    </Link>
  );
}

export default TertiaryButton;
