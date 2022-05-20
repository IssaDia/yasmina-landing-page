import React, { useState } from "react";
import { CalendlyModal } from "./components/Calendly/index";
import Jumbotron from "./components/Jumbotron/index";
import { Layout } from "./components/Layout/index";
import { Navbar } from "./components/Navbar/index";

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
   </Layout>
   <div className="h-96 bg-salmon"></div>
  </>
 );
};

export default App;
