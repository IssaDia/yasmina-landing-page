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
   className="cursor-pointer text-black text-5xl fixed"
   data-test="closeModal"
  >
   x
  </button>
 );
};
