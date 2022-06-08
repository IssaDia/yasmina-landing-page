import React from "react";
import aboutMePic from "../../../assets/images/yasmina-corman-about-me.jpeg";

const AboutMePic: React.FC = () => {
 return (
  <div>
   <img
    src={aboutMePic}
    alt="photo de Yasmina Corman"
    className="s:w-full max-w-full max-h-full object-fill"
   />
  </div>
 );
};

export default AboutMePic;
