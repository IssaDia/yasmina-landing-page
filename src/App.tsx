import React, { useState } from "react";
import { CalendlyModal } from "./components/Calendly";
import Jumbotron from "./components/Jumbotron";
import Layout from "./components/Layout";
import Reviews from "./components/Reviews/Container";
import Navbar from "./components/Navbar";

const App: React.FC = () => {
 const [calendlyModalIsActive, setCalendlyModalIsActive] =
  useState<boolean>(false);
 const handleCalendlyModal = () => {
  setCalendlyModalIsActive((prev) => !prev);
  return;
 };
 return (
  <>
   <Layout>
    <Navbar handleShow={handleCalendlyModal} />
    {calendlyModalIsActive && (
     <CalendlyModal
      show={calendlyModalIsActive}
      handleShow={handleCalendlyModal}
     />
    )}
    <Jumbotron />
    <Reviews />
   </Layout>
  </>
 );
};

export default App;
