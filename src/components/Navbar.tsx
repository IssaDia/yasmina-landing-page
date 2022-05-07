import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo-yasmina.png";
import { Nav } from "./Nav";

interface CalendlyHandleModalProps {
 handleShow: () => void;
}

export const Navbar: React.FC<CalendlyHandleModalProps> = (props: {
 handleShow: () => void;
}) => {
 const [navIsActive, setNavIsActive] = useState<boolean>(false);
 const [navIsScrolling, setNavIsScrolling] = useState<boolean>(false);

 useEffect(() => {
  window.onscroll = () => handleNavbarScrolling();
  const handleNavbarScrolling = () => {
   if (window.scrollY == 0) {
    setNavIsScrolling(false);
   } else {
    setNavIsScrolling(true);
   }
  };
 }, []);
 const handleNavbar = () => {
  setNavIsActive((prev) => !prev);
 };
 return (
  <>
   <nav
    className={`z-10 h-30 flex-shrink-0 ${
     navIsScrolling && "transition duration-500 ease-in-out bg-white"
    } transition duration-500 ease-in-out flex items-center flex-wrap bg-transparent w-full fixed`}
   >
    <Link to="/" className="navbar-brand">
     <img src={logo} alt="logo" className="w-24 h-24"></img>
    </Link>
    <button
     className=" inline-flex p-3 rounded lg:hidden text-black ml-auto hover:text-black outline-none"
     onClick={handleNavbar}
    >
     <svg
      className="w-6 h-6"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
     >
      <path
       strokeLinecap="round"
       strokeLinejoin="round"
       strokeWidth={2}
       d="M4 6h16M4 12h16M4 18h16"
      />
     </svg>
    </button>
    <div
     className={`w-full lg:inline-flex lg:flex-grow lg:w-auto transition duration-500 ease-in-out ${
      navIsActive ? "" : "hidden"
     }`}
    >
     <div className="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center justify-center items-center m-8 flex flex-col lg:h-auto">
      <Nav />
      <button
       onClick={() => props.handleShow()}
       className="text-sm text-white hover:text-orange font-bold bg-orange hover:bg-white border-2 hover:border-orange rounded-3xl p-2"
      >
       Réserver un entretien gratuit
      </button>
     </div>
    </div>
   </nav>
  </>
 );
};
