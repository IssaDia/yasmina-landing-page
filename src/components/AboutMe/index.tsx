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
    <div className="lg:w-1/2 s:w-full bg-salmon space-y-6 xl:space-y-24 pb-4">
     <div className="px-4">
      <AboutMeText />
     </div>
     <div className="border-2 text-black no-underline flex flex-row md:w-1/3 s:w-3/4 s:text-sm xl:text-3xl p-4 space-x-4 mx-auto">
      <p>rejoignez moi : </p>
      <a href="https://www.instagram.com/yasmina_corman/" className="-my-2">
       <FontAwesomeIcon icon={faInstagram} size="2x" />
      </a>
      <a href="https://www.facebook.com/iiasmina.laouami" className="-my-2">
       <FontAwesomeIcon icon={faLinkedin} size="2x" />
      </a>
     </div>
    </div>
   </div>
  </section>
 );
};

export default AboutMe;
