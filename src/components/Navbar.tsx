import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo-yasmina.png";

export const Navbar: React.FC = () => {
 return (
  <>
   <nav className="z-10 h-30 flex-shrink-0">
    <Link to="/" className="navbar-brand">
     <img src={logo} alt="logo"></img>
    </Link>
   </nav>
  </>
 );
};
