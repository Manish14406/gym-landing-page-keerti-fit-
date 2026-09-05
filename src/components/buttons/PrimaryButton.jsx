import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";

function PrimaryButton({ to = "/", children }) {
  return (
    <Link
      to={to}
      className="group focus relative inline-flex items-center gap-2 border-2 border-red bg-matte-black px-8 py-4 text-sm font-bold uppercase text-white shadow-lg transition-all duration-300 hover:bg-red hover:border-red hover:text-white"
    >
      <span>{children}</span>
      <FaArrowRight className="h-auto w-3.5 text-red transition-colors duration-300 group-hover:text-white" />
    </Link>
  );
}

export default PrimaryButton;
