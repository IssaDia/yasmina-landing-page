import React from "react";

export const Nav: React.FC = () => {
 return (
  <ul className="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center flex flex-col items-center justify-center">
   <div className="flex flex-row space-x-2">
    <li className="flex flex-row">
     <a className="text-md uppercase hover:text-orange text-black" href="/">
      Accueil
     </a>
    </li>
    <li className="flex flex-row">
     <a
      className="text-md uppercase hover:text-orange text-black"
      href="#aboutme"
     >
      Qui sommes nous?
     </a>
    </li>
    <li className="flex flex-row">
     <a
      className="text-md uppercase hover:text-orange text-black"
      href="#personalSupport"
     >
      Les accompagnements personnalisés
     </a>
    </li>
    <li className="flex flex-row">
     <a className="text-md uppercase hover:text-orange text-black" href="#mo2i">
      MO2i
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
