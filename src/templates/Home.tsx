import React from "react";
import AboutMe from "../components/AboutMe/index";
import SectionTitle from "../components/atoms/SectionTitle";
import Services from "../components/Services";
import Reviews from "../components/Reviews/Container";
import Support from "../components/Support";

const Home: React.FC = () => {
 return (
  <>
   <section id="aboutme">
    <SectionTitle title="Qui suis-je?" />
    <AboutMe />
   </section>

   <section id="personalSupport">
    {" "}
    <SectionTitle title="Mes accompagnments Personnalisés" />
    <Support />
   </section>

   <section id="mo2i">
    {" "}
    <SectionTitle title="Le Mo2i pour tous" />
    <Services />
   </section>

   <section id="reviews">
    {" "}
    <SectionTitle title="Témoignages" />
    <Reviews />
   </section>
  </>
 );
};

export default Home;
