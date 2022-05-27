import React, { useState } from "react";
import { CalendlyModal } from "./components/Calendly";
import Jumbotron from "./components/Jumbotron";
import Reviews from "./components/Reviews/Container";
import Navbar from "./components/Navbar";
import AboutMe from "./components/AboutMe.tsx";
import SectionTitle from "./components/atoms/SectionTitle";

const App: React.FC = () => {
 const [calendlyModalIsActive, setCalendlyModalIsActive] =
  useState<boolean>(false);
 const handleCalendlyModal = () => {
  setCalendlyModalIsActive((prev) => !prev);
  return;
 };
 return (
  <>
   <Navbar handleShow={handleCalendlyModal} />
   {calendlyModalIsActive && (
    <CalendlyModal
     show={calendlyModalIsActive}
     handleShow={handleCalendlyModal}
    />
   )}
   <Jumbotron />
   <SectionTitle title="Témoignages" />

   <Reviews />
   <SectionTitle title="Qui sommes nous?" />

   <AboutMe />
  </>
 );
};

export default App;
