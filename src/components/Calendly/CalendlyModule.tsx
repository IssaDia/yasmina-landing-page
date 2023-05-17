import React, { useEffect } from "react";
import { handleCalendlyscriptCall } from "./utils/handleCalendlyscriptCall";

export const CalendlyModule: React.FC = () => {
 useEffect(() => {
  handleCalendlyscriptCall();
 }, []);
 return (
  <div>
   <div id="schedule_form">
    <div
     className="calendly-inline-widget sm:w-full h-screen m-auto p-5 max-w-6xl"
     data-url="https://calendly.com/yasminacorman/entretien-offert-45min?month=2022-05"
    />
    <script
     type="text/javascript"
     src="https://assets.calendly.com/assets/external/widget.js"
     async
    ></script>
   </div>
  </div>
 );
};
