import React from "react";
import logo from "../../assets/images/logo-yasmina-bis.png";
import { Link } from "react-router-dom";

export function Logo() {
 return (
  <Link to="/" className="navbar-brand grow -mt-2">
   <img
    src={logo}
    className="w-24 h-24"
    alt="logo du site de Yasmina Corman"
   ></img>
  </Link>
 );
}
