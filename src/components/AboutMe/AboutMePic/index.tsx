import React from "react";
import aboutMePic from "../../../assets/images/yasmina-corman-about-me.jpeg";

const AboutMePic: React.FC = () => {
 return (
  <div>
   <img
    src={aboutMePic}
    alt="photo de Yasmina Corman"
    className="h-full w-[600px] max-w-full	"
   />
  </div>
 );
};

export default AboutMePic;
