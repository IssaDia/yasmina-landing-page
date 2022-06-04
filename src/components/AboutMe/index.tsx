import React from "react";
import AboutMePic from "./AboutMePic";
import AboutMeText from "./AboutMeText";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const AboutMe: React.FC = () => {
 return (
  <section className="">
   <div className="lg:flex lg:flex-row">
    <div className="lg:w-1/2 s:w-full">
     <AboutMePic />
    </div>
    <div className="lg:w-1/2 s:w-full bg-salmon space-y-6">
     <div className="px-4">
      <AboutMeText />
     </div>
     <div className="border-2 text-black no-underline flex flex-row lg:p-8 s:p-4 s:w-3/4 pb-4 lg:w-1/2 mx-auto space-x-2">
      <p>rejoignez moi : </p>
      <div className="-my-2">
       <FontAwesomeIcon icon={faInstagram} size="2x" />
      </div>
      <div className="-my-2">
       <FontAwesomeIcon icon={faLinkedin} size="2x" />
      </div>
     </div>
    </div>
   </div>
  </section>
 );
};

export default AboutMe;
