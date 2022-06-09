import React from "react";
import aboutMePic from "../../../assets/images/yasmina-corman-about-me.jpeg";

const AboutMePic: React.FC = () => {
 return (
  <div>
   <img
    src={aboutMePic}
    alt="photo de Yasmina Corman"
    className="s:w-full h-[1000px] object-fill"
   />
  </div>
 );
};

export default AboutMePic;
