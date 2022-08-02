import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

const Footer: React.FC = () => {
 return (
  <>
   <footer className="w-full h-48 bg-salmon">
    <div className="text-white flex flex-col items-center pt-12 xl:text-3xl">
     <div>
      <p className="font-playlist text-2xl">
       Réussir et briller en toute confiance
      </p>
     </div>
     <ul className="flex flex-row space-x-4">
      <li className="underline">
       <a href="https://www.instagram.com/yasmina_corman/">Instagram</a>
      </li>
      <li className="underline">
       <a href="https://g.co/kgs/GHFnMk">Google</a>
      </li>
      <li className="underline">
       <a href="https://www.linkedin.com/in/yasmina-corman/">Linkedin</a>
      </li>
     </ul>
     <div className="flex flex-col items-center">
      <p className="center">
       {" "}
       <FontAwesomeIcon icon={faPhone} size="1x" /> 07 60 43 36 09{" "}
      </p>
      <p className="center">
       {" "}
       <FontAwesomeIcon icon={faEnvelope} size="1x" />{" "}
       <a href="mailto:yasminacorman@gmail.com">yasminacorman@gmail.com</a>
      </p>
     </div>
    </div>
   </footer>
  </>
 );
};

export default Footer;
