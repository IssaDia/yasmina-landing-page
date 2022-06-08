import React from "react";

const Footer: React.FC = () => {
 return (
  <>
   <footer className="w-full h-48 bg-salmon">
    <div className="text-white flex flex-col items-center py-12 xl:text-3xl">
     <div>
      <p>Réussir et briller en toute confiance</p>
     </div>
     <ul className="flex flex-row space-x-4">
      <li className="underline">
       <a href="https://www.instagram.com/yasmina_corman/">Instagram</a>
      </li>
      <li className="underline">
       <a href="https://www.facebook.com/iiasmina.laouami">Facebook</a>
      </li>
      <li className="underline">
       <a href="https://g.co/kgs/GHFnMk">Google</a>
      </li>
     </ul>
    </div>
   </footer>
  </>
 );
};

export default Footer;
