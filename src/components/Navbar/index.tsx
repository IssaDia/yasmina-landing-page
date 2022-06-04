import { NavbarBurger } from "./NavbarBurger";
import React, { useState } from "react";
import { useHandleNavbarScrollingOnStart } from "../../hooks/useHandleNavbarScrollingOnStart";
import { Logo } from "./Logo";
import { Nav } from "./Nav";
import { Button } from "issa-react-component-library";
import { handleButtonCalendly } from "../../lib/interfaces/index";

const Navbar: React.FC<handleButtonCalendly> = (props: {
 handleShow: () => void;
}) => {
 const navIsScrolling = useHandleNavbarScrollingOnStart();

 const [navIsOpened, setNavIsOpened] = useState<boolean>(false);

 const handleNavbar = () => {
  setNavIsOpened((prev) => !prev);
 };

 console.log(navIsOpened);

 return (
  <>
   <nav
    className={`z-10 h-30 flex-shrink-0 s:bg-white fixed w-full flex-wrap flex items-center ${
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
     <div className="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center justify-center items-center s:mb-4 flex flex-col lg:h-auto">
      <Nav isOpen={navIsOpened} />
      <Button
       className="text-sm p-2 bg-orange text-white font-bold border-2 hover:text-orange hover:bg-white hover:border-orange rounded-3xl"
       onClick={() => props.handleShow()}
       data-test="showCalendlyModal"
      >
       Réserver un entretien gratuit
      </Button>
     </div>
    </div>
   </nav>
  </>
 );
};

export default Navbar;
