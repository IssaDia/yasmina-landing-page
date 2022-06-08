import React, { useState } from "react";
import { CalendlyModal } from "./components/Calendly";
import Jumbotron from "./components/Jumbotron";
import Reviews from "./components/Reviews/Container";
import Navbar from "./components/Navbar";
import AboutMe from "./components/AboutMe";
import SectionTitle from "./components/atoms/SectionTitle";
import Layout from "./components/Layout";
import PersonalSupport from "./components/personalSupport";
import Mo2i from "./components/MO2i";
import Footer from "./components/Footer";

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
    <div id="aboutme" className="pt-16">
     <SectionTitle title="Qui sommes nous?" />
     <AboutMe handleShow={handleCalendlyModal} />
    </div>

    <div id="personalSupport" className="pt-16">
     {" "}
     <SectionTitle title="Mes accompagnments Personnalisés" />
     <PersonalSupport />
    </div>

    <div id="mo2i" className="pt-16">
     {" "}
     <SectionTitle title="MO2i" />
     <Mo2i handleShow={handleCalendlyModal} />
    </div>

    <div id="reviews" className="pt-16">
     {" "}
     <SectionTitle title="Témoignages" />
     <Reviews />
    </div>
    <div>
     <Footer></Footer>
    </div>
   </Layout>
  </>
 );
};

export default App;
