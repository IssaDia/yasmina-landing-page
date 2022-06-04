import React from "react";

const Footer: React.FC = () => {
 return (
  <>
   <footer className="w-full h-48 bg-salmon">
    <div className="text-white flex flex-col items-center">
     <div>
      <p>Réussir et briller en toute confiance</p>
     </div>
     <ul className="flex flex-row space-x-4">
      <li className="underline">
       <a href="https://twitter.com/julesforrest">Instagram</a>
      </li>
      <li className="underline">
       <a href="https://codepen.io/julesforrest">Facebook</a>
      </li>
      <li className="underline">
       <a href="mailto:julesforrest@gmail.com">Email</a>
      </li>
     </ul>
    </div>
   </footer>
  </>
 );
};

export default Footer;
