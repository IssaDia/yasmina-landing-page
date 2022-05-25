import { NavbarBurger } from "./NavbarBurger";
import React, { useState } from "react";
import { useHandleNavbarScrollingOnStart } from "../../hooks/useHandleNavbarScrollingOnStart";
import { Logo } from "./Logo";
import { Nav } from "./Nav";
import { Button } from "issa-react-component-library";
import { cn } from "../../tailwindUtils";

interface CalendlyHandleModalProps {
 handleShow: () => void;
}

export const Navbar: React.FC<CalendlyHandleModalProps> = (props: {
 handleShow: () => void;
}) => {
 const navIsScrolling = useHandleNavbarScrollingOnStart();

 const [navIsOpened, setNavIsOpened] = useState<boolean>(false);

 const handleNavbar = () => {
  setNavIsOpened((prev) => !prev);
 };

 console.log(cn(`text-sm flex`));

 return (
  <>
   <nav
    className={`z-10 h-30 flex-shrink-0 ${
     navIsScrolling && "transition duration-500 ease-in-out bg-white"
    } transition duration-500 ease-in-out flex items-center flex-wrap w-full fixed`}
   >
    <Logo />
    <NavbarBurger handleNavbar={handleNavbar} />
    <div
     className={`w-full lg:inline-flex lg:flex-grow lg:w-auto transition duration-500 ease-in-out ${
      !navIsOpened && "hidden"
     }`}
    >
     <div className="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center justify-center items-center m-8 flex flex-col lg:h-auto">
      <Nav />
      <Button
       className="text-sm p-2 bg-orange text-white font-bold border-2 hover:text-orange hover:bg-white hover:border-orange rounded-3xl"
       onClick={() => props.handleShow()}
       // datatest="showCalendlyModal"
      >
       Réserver un entretien gratuit
      </Button>
     </div>
    </div>
   </nav>
  </>
 );
};
