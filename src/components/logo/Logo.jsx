import { Link } from "react-router-dom";
import logoNavbar from "../../images/logo/logo.png";
import logoFooter from "../../images/logo/logo-footer.png";

function Logo({ type = "white" }) {
  const isFooter = type === "black";
  return (
    <Link to="/" className="focus inline-block">
      <img
        src={isFooter ? logoFooter : logoNavbar}
        alt="Keerthi Fitness Gym"
        className={
          isFooter
            ? "h-auto w-full max-w-[360px] sm:max-w-[440px] object-contain"
            : "h-20 sm:h-24 md:h-28 xl:h-32 w-auto object-contain anim-logo drop-shadow-[0_6px_20px_rgba(0,0,0,0.7)] transition-transform duration-300 hover:scale-105"
        }
      />
    </Link>
  );
}

export default Logo;
