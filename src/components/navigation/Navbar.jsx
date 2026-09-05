import { useEffect, useState } from "react";
import Logo from "../logo/Logo";
import NavLinks from "./NavLinks";
import NavButtons from "./NavButtons";
import MobileNav from "./MobileNav";

function Navigation() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [stickyNav, setStickyNav] = useState(false);

  useEffect(function () {
    function stickNav() {
      window.scrollY > 150 ? setStickyNav(true) : setStickyNav(false);
    }

    window.addEventListener("scroll", stickNav);

    return () => window.removeEventListener("scroll", stickNav);
  }, []);



  function handleToggleNav() {
    setIsNavOpen(!isNavOpen);
  }

  return (
    <>
      <nav
        className={`${
          stickyNav
            ? "sticky top-0 bg-white/95 backdrop-blur-md shadow-md py-2"
            : "sticky top-0 bg-white shadow-sm py-3"
        } z-50 flex items-center justify-between gap-4 px-4 sm:px-8 transition-all duration-300`}
      >
        <Logo />

        <NavLinks styles="3xl:flex hidden gap-7 font-bold text-sm uppercase tracking-wider text-matte-black" />

        <NavButtons onToggleNav={handleToggleNav} />
      </nav>

      <MobileNav isNavOpen={isNavOpen} onToggleNav={handleToggleNav} />

    </>
  );
}

export default Navigation;
