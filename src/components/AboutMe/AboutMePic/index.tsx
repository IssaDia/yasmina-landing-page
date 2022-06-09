import React from "react";
import aboutMePic from "../../../assets/images/yasmina-corman-about-me.jpeg";

const AboutMePic: React.FC = () => {
 return (
  <>
   <img
    src={aboutMePic}
    alt="photo de Yasmina Corman"
    className="s:w-full xl:h-[1800px] lg:h-[900px] object-fill"
   />
  </>
 );
};

export default AboutMePic;
