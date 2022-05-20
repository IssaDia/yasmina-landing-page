import React from "react";

interface CalendlyModalOpenButtonProps {
 handleOpenModal: () => void;
}
export const CalendlyModalOpenButton: React.FC<
 CalendlyModalOpenButtonProps
> = (props: { handleOpenModal: () => void }) => {
 return (
  <button
   onClick={() => props.handleOpenModal()}
   data-test="showCalendlyModal"
   className="text-sm text-white hover:text-orange font-bold bg-orange hover:bg-white border-2 hover:border-orange rounded-3xl p-2"
  >
   Réserver un entretien gratuit
  </button>
 );
};
