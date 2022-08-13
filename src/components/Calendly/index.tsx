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
    onClick={() => handleCalendlyModal}
    className="w-full h-full bg-black opacity-75 cursor-pointer fixed z-20"
   ></div>
   <div className="w-full h-full flex items-center absolute justify-center">
    <div
     className={`${showModal} z-20 fixed w-5/6 mx-auto h-[600px] flex flex-col shadow-xl bg-white`}
     data-test="calendlyModal"
    >
     <CalendlyModalCloseButton />
     <div className="self-center">
      <CalendlyModule />
     </div>
    </div>
   </div>
  </>
 );
};
