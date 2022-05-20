import React from "react";
import logo from "../../assets/images/logo-yasmina.png";
import { Link } from "react-router-dom";

export function Logo() {
 return (
  <Link to="/" className="navbar-brand">
   <img src={logo} alt="logo" className="w-24 h-24"></img>
  </Link>
 );
}
