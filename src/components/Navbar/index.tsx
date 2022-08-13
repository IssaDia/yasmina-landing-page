import { NavbarBurger } from "./NavbarBurger";
import React, { useState } from "react";
import { useHandleNavbarScrollingOnStart } from "../../hooks/useHandleNavbarScrollingOnStart";
import { Logo } from "./Logo";
import { Nav } from "./Nav";
import { Button } from "issa-react-component-library";
import { usCalendlyContext } from "../../App";

const Navbar: React.FC = () => {
 const { calendlyIsActive, setCalendlyIsActive } = usCalendlyContext();

 const handleCalendlyModal = () => {
  setCalendlyIsActive(!calendlyIsActive);
  return;
 };
 const navIsScrolling = useHandleNavbarScrollingOnStart();

 const [navIsOpened, setNavIsOpened] = useState<boolean>(false);

 const handleNavbar = () => {
  setNavIsOpened((prev) => !prev);
 };

 return (
  <>
   <nav
    className={`z-10 h-15 flex-shrink-0 s:bg-white fixed w-full flex-wrap flex items-center ${
     navIsScrolling
      ? "transition duration-500 ease-in-out bg-white"
      : "lg:bg-transparent"
    }`}
   >
    <Logo />
    <NavbarBurger handleNavbar={handleNavbar} />
    <div
     className={`w-full lg:inline-flex lg:flex-grow lg:w-auto transition duration-500 ease-in-out ${
      !navIsOpened && "hidden"
     }`}
    >
     <div className="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center justify-center items-center s:mb-4 flex flex-col lg:h-auto lg:px-4">
      <Nav isOpen={navIsOpened} />
      <Button
       className="text-sm p-3 bg-orange text-white font-bold border-2 hover:text-orange hover:bg-white hover:border-orange rounded-3xl xl:text-4xl"
       onClick={handleCalendlyModal as () => void}
       data-test="showCalendlyModal"
      >
       Booker mon entretien gratuit
      </Button>
     </div>
    </div>
   </nav>
  </>
 );
};

export default Navbar;
