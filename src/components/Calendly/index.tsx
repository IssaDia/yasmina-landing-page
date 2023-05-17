import React from "react";
import { usCalendlyContext } from "../../App";
import { CalendlyModalCloseButton } from "./CalendlyModalCloseButton";
import { CalendlyModule } from "./CalendlyModule";

export const CalendlyModal: React.FC = () => {
 const { calendlyIsActive, setCalendlyIsActive } = usCalendlyContext();
 const handleCalendlyModal = () => {
  setCalendlyIsActive(!calendlyIsActive);

  return;
 };

 const showModal = calendlyIsActive ? "visible" : "invisible";

 return (
  <>
   <div
    onClick={handleCalendlyModal}
    className="w-full h-full bg-black bg-opacity-40 cursor-pointer fixed left-0 top-0 z-20 transition-all duration-500 overflow-auto"
   >
    {showModal ? (
     <div className="static">
      <div className="h-20 flex md:justify-end justify-start pl-10 absolute w-full z-40 pr-10 pt-5 ">
       <CalendlyModalCloseButton />
      </div>
      <CalendlyModule />
     </div>
    ) : null}
    <div className="flex justify-end"></div>
   </div>

   {/* </div>
   </div> */}
  </>
 );
};
