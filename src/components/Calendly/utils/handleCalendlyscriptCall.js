export const handleCalendlyscriptCall = () => {
 const head = document.querySelector("head");
 const script = document.createElement("script");
 script.setAttribute(
  "src",
  "https://assets.calendly.com/assets/external/widget.js"
 );
 head && head.appendChild(script);
};
