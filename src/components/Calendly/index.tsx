import React from "react";
import { CalendlyModalCloseButton } from "./CalendlyModalCloseButton";
import { CalendlyModule } from "./CalendlyModule";

interface CalendlyModalProps {
 show: boolean;
 handleShow: () => void;
}

export const CalendlyModal: React.FC<CalendlyModalProps> = (props: {
 show: boolean;
 handleShow: () => void;
}) => {
 const showModal = props.show ? "visible" : "invisible";

 return (
  <>
   <div
    onClick={() => props.handleShow()}
    className="w-full h-full bg-black opacity-75 cursor-pointer fixed z-20"
   ></div>
   <div className="w-full h-full flex items-center absolute justify-center">
    <div
     className={`${showModal} z-20 fixed w-5/6 mx-auto h-[600px] flex flex-col shadow-xl bg-white`}
     data-test="calendlyModal"
    >
     <CalendlyModalCloseButton handleCloseModal={() => props.handleShow()} />
     <div className="self-center">
      <CalendlyModule />
     </div>
    </div>
   </div>
  </>
 );
};
