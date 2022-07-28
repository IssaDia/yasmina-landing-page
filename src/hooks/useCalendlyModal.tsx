import { useState } from "react";

export const useCalendlyModal = () => {
 const [calendlyModalIsActive, setCalendlyModalIsActive] =
  useState<boolean>(false);
 const handleCalendlyModal: () => void = () => {
  setCalendlyModalIsActive((prev) => !prev);
  console.log("launched", calendlyModalIsActive);
 };

 return [calendlyModalIsActive, handleCalendlyModal];
};
