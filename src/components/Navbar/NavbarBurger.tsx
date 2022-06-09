import React from "react";
interface NavbarBurgerProps {
 handleNavbar: () => void;
}

export const NavbarBurger: React.FC<NavbarBurgerProps> = (props: {
 handleNavbar: () => void;
}) => {
 return (
  <button
   className=" inline-flex p-4 rounded lg:hidden text-black ml-auto hover:text-black outline-none"
   data-test="navbarBurger"
   onClick={() => props.handleNavbar()}
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
 );
};
