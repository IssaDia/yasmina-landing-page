import React from "react";
import AboutMePic from "./AboutMePic";
import AboutMeText from "./AboutMeText";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebook } from "@fortawesome/free-brands-svg-icons";

const AboutMe: React.FC = () => {
 return (
  <section className="w-full bg-salmon">
   <div className="w-[1280px] max-w-[95%] my-auto mx-0 flex space-x-8 space-y-8">
    <AboutMePic />
    <div className="w-[550px] max-w-full py-4">
     <AboutMeText />
     <div className="border-2 text-black no-underline px-3 py-8 flex justify-center space-x-2">
      <p>rejoignez moi : </p>
      <div className="-m-2">
       <FontAwesomeIcon icon={faInstagram} size="2x" />
      </div>
      <div className="-m-2">
       <FontAwesomeIcon icon={faFacebook} size="2x" />
      </div>
     </div>
    </div>
   </div>
  </section>
 );
};

export default AboutMe;
