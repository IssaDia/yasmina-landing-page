import React from "react";
import AboutMePic from "./AboutMePic";
import AboutMeText from "./AboutMeText";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
 faInstagram,
 faLinkedin,
 faGoogle,
} from "@fortawesome/free-brands-svg-icons";
import { Button } from "issa-react-component-library";
import { usCalendlyContext } from "../../App";

const AboutMe: React.FC = () => {
 const { calendlyIsActive, setCalendlyIsActive } = usCalendlyContext();
 const handleCalendlyModal = () => {
  setCalendlyIsActive(!calendlyIsActive);
  return;
 };

 return (
  <section className="">
   <div className="lg:flex lg:flex-row">
    <div className="lg:w-1/2 s:w-full xl:h-[1800px] lg:h-[900px] s:h-full">
     <AboutMePic />
    </div>
    <div className="lg:w-1/2 s:w-full bg-salmon space-y-6 xl:space-y-24 pb-4 xl:h-[1800px] lg:h-[900px] s:h-full">
     <div className="px-4">
      <AboutMeText />
     </div>
     <div className=" text-black no-underline flex flex-row md:w-1/3 s:w-3/4 s:text-sm xl:text-3xl p-4 space-x-2 mx-auto">
      <p className="text-xs">rejoins moi : </p>
      <a href="https://www.instagram.com/yasmina_corman/" className="-my-2">
       <FontAwesomeIcon icon={faInstagram} size="2x" />
      </a>
      <a href="https://www.facebook.com/iiasmina.laouami" className="-my-2">
       <FontAwesomeIcon icon={faLinkedin} size="2x" />
      </a>
      <a href="https://g.co/kgs/GHFnMk" className="-my-2">
       <FontAwesomeIcon icon={faGoogle} size="2x" />
      </a>
     </div>
     <div className="flex lg:flex-row s:flex-col">
      <div className="mx-auto">
       <Button
        className="text-sm p-4 bg-orange text-white font-bold border-2 hover:text-orange hover:bg-white hover:border-orange rounded-3xl xl:text-4xl"
        onClick={handleCalendlyModal as () => void}
        data-test="showCalendlyModal"
       >
        Booker mon entretien gratuit
       </Button>
      </div>
     </div>
    </div>
   </div>
  </section>
 );
};

export default AboutMe;
