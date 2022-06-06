import React from "react";
import aboutMePic from "../../../assets/images/yasmina-corman-about-me.jpeg";

const AboutMePic: React.FC = () => {
 return (
  <div>
   <img
    src={aboutMePic}
    alt="photo de Yasmina Corman"
    className="lg:h-full md:h-full s:h-96 s:w-full max-w-full"
   />
  </div>
 );
};

export default AboutMePic;
