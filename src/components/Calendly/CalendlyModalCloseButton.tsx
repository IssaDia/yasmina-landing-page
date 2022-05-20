import React from "react";

interface CalendlyModalCloseButtonProps {
 handleCloseModal: () => void;
}
export const CalendlyModalCloseButton: React.FC<
 CalendlyModalCloseButtonProps
> = (props: { handleCloseModal: () => void }) => {
 return (
  <button
   onClick={() => props.handleCloseModal()}
   className="cursor-pointer text-black rounded-lg self-end text-6xl mr-10"
   data-test="closeModal"
  >
   x
  </button>
 );
};
