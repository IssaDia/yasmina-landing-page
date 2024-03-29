import React from "react";

interface NavProps {
 isOpen: boolean;
}

export const Nav: React.FC<NavProps> = ({ isOpen }) => {
 return (
  <ul className="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center flex flex-col items-center justify-center">
   <div
    className={` ${
     !isOpen
      ? "flex flex-row space-x-3 mx-2 text-sm"
      : "md:flex md:flex-col space-y-2 my-2 text-sm lg:flew-row"
    }`}
   >
    <li className="">
     <a className="text-md uppercase hover:text-orange text-black" href="/">
      Accueil
     </a>
    </li>
    <li className="flex flex-row">
     <a
      className="text-md uppercase hover:text-orange text-black"
      href="#aboutme"
     >
      Qui suis-je
     </a>
    </li>
    <li className="flex flex-row">
     <a
      className="text-md uppercase hover:text-orange text-black"
      href="#personalSupport"
     >
      Mes accompagnements personnalisés
     </a>
    </li>
    <li className="flex flex-row">
     <a className="text-md uppercase hover:text-orange text-black" href="#mo2i">
      Le Mo2i pour tous
     </a>
    </li>
    <li className="flex flex-row">
     <a
      className="text-md uppercase hover:text-orange text-black"
      href="#reviews"
     >
      Témoignages
     </a>
    </li>
   </div>
  </ul>
 );
};
