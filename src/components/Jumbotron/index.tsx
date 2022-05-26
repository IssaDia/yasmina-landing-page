import React from "react";

import Image from "./Image";
import JumbotronCatchphrase from "./Catchphrase";
import JumbotronSubtitle from "./Subtitle";
import JumbotronTitle from "./Title";

const Jumbotron: React.FC = () => {
 return (
  <div className="bg-home-hero bg-no-repeat bg-cover bg-left bg-origin-border flex flex-col">
   <div className="flex flex-col">
    <div className="flex flex-col justify-center items-center mt-24">
     <div>
      <JumbotronTitle />
     </div>
     <div>
      <JumbotronSubtitle />
     </div>
    </div>
    <div className="flex s:flex-col md:flex-row s:items-center md:text-center">
     <div className="s:mt-14 md:w-2/3 ">
      <JumbotronCatchphrase />
     </div>
     <div className="s:mt-8 md:mt-20 md:w-1/3">
      <Image />
     </div>
    </div>
   </div>
  </div>
 );
};

export default Jumbotron;
