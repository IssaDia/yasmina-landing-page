import { useState, useEffect } from "react";

export const useHandleNavbarScrollingOnStart = () => {
 const [navIsScrolling, setNavIsScrolling] = useState<boolean>(false);

 useEffect(() => {
  window.onscroll = () => handleNavbarScrolling();
  const handleNavbarScrolling = () => {
   if (window.scrollY === 0) {
    setNavIsScrolling(false);
   } else {
    setNavIsScrolling(true);
   }
  };
 }, []);

 return navIsScrolling;
};
