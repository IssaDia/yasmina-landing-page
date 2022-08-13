import React from "react";
import { usCalendlyContext } from "../../App";

export const CalendlyModalCloseButton: React.FC = () => {
 const { calendlyIsActive, setCalendlyIsActive } = usCalendlyContext();

 const handleCalendlyModal = () => {
  setCalendlyIsActive(!calendlyIsActive);
  return;
 };
 return (
  <button
   onClick={handleCalendlyModal as () => void}
   className="cursor-pointer text-black rounded-lg self-end text-6xl mr-10"
   data-test="closeModal"
  >
   x
  </button>
 );
};
