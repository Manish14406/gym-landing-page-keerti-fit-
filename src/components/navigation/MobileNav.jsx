import { useEffect } from "react";
import NavLinks from "./NavLinks";
import CloseButton from "./CloseButton";

function MobileNav({ isNavOpen, onToggleNav }) {
  useEffect(() => {
    if (isNavOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isNavOpen]);

  return (
    <div
      aria-hidden={!isNavOpen}
      className={`fixed inset-0 z-50 flex h-[100dvh] w-full flex-col justify-center items-center bg-[#141414]/98 backdrop-blur-md transition-all duration-300 3xl:hidden ${
        isNavOpen ? "translate-x-0 opacity-100 visible" : "-translate-x-full opacity-0 invisible"
      }`}
    >
      <NavLinks
        onToggleNav={onToggleNav}
        styles="flex 3xl:hidden gap-7 font-bold text-xl text-white flex-col justify-center items-center uppercase tracking-wider"
      />

      <CloseButton onClick={onToggleNav} />
    </div>
  );
}

export default MobileNav;
