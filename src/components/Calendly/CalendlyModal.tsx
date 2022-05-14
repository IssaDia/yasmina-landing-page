import React from "react";
import { Calendly } from "./Calendly";

interface CalendlyModalProps {
 show: boolean;
 handleShow: () => void;
}

export const CalendlyModal: React.FC<CalendlyModalProps> = (props: {
 show: boolean;
 handleShow: () => void;
}) => {
 const showModal = props.show ? "visible" : "invisible";
 console.log(showModal);

 return (
  <>
   <div
    onClick={() => props.handleShow()}
    className="w-full h-full bg-black opacity-75 cursor-pointer fixed z-20"
   ></div>
   <div className="w-full h-full flex items-center absolute justify-center">
    <div
     className={`${showModal} z-20 fixed h-[480px] flex flex-col shadow-xl bg-white`}
     data-test="calendlyModal"
    >
     <div
      onClick={() => props.handleShow()}
      className="cursor-pointer text-black rounded-lg self-end text-6xl mr-10"
     >
      x
     </div>
     <div className="self-center">
      <Calendly />
     </div>
    </div>
   </div>
  </>
 );
};
