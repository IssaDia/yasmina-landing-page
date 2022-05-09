import React, { useState } from "react";
import { CalendlyModal } from "./Calendly/CalendlyModal";
import Jumbotron from "./Jumbotron";
import { Navbar } from "./Navbar";

const Layout: React.FC = () => {
 const [calendlyModalIsActive, setCalendlyModalIsActive] =
  useState<boolean>(false);
 const handleCalendlyModal = () => {
  setCalendlyModalIsActive((prev) => !prev);
  return;
 };
 return (
  <div className="container-fluid flex flex-col font-poppins h-screen">
   <Navbar handleShow={handleCalendlyModal} />
   {calendlyModalIsActive && (
    <CalendlyModal
     show={calendlyModalIsActive}
     handleShow={handleCalendlyModal}
    />
   )}
   <Jumbotron />
  </div>
 );
};

export default Layout;
