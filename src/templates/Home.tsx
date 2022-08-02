import React from "react";
import AboutMe from "../components/AboutMe";
import SectionTitle from "../components/atoms/SectionTitle";
import PersonalSupport from "../components/PersonalSupport";
import Reviews from "../components/Reviews/Container";

const Home: React.FC = () => {
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
