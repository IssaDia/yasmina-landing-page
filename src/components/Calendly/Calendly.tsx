import React, { useEffect } from "react";

export const Calendly: React.FC = () => {
 useEffect(() => {
  const head = document.querySelector("head");
  const script = document.createElement("script");
  script.setAttribute(
   "src",
   "https://assets.calendly.com/assets/external/widget.js"
  );
  head && head.appendChild(script);
 }, []);
 return (
  <div>
   <div id="schedule_form">
    <div
     className="calendly-inline-widget"
     data-url="https://calendly.com/issadia"
     style={{ minWidth: "620px", height: "480px" }}
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
