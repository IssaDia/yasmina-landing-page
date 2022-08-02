import React from "react";
import AboutMe from "../components/AboutMe/index";
import SectionTitle from "../components/atoms/SectionTitle";
import Services from "../components/Services";
import PersonalSupport from "../components/PersonalSupport";
import Reviews from "../components/Reviews/Container";
import { useCalendlyModal } from "../hooks/useCalendlyModal";

const Home: React.FC = () => {
 const [handleCalendlyModal] = useCalendlyModal();
 return (
  <>
   <div id="aboutme" className="pt-16">
    <SectionTitle title="Qui suis-je?" />
    <AboutMe />
   </div>

   <div id="personalSupport" className="pt-16">
    {" "}
    <SectionTitle title="Mes accompagnments Personnalisés" />
    <PersonalSupport />
   </div>

   <div id="mo2i" className="pt-16">
    {" "}
    <SectionTitle title="Le Mo2i pour tous" />
    <Services handleShow={handleCalendlyModal as () => void} />
   </div>

   <div id="reviews" className="pt-16">
    {" "}
    <SectionTitle title="Témoignages" />
    <Reviews />
   </div>
  </>
 );
};

export default Home;
