import { useState } from "react";

export const useHandleNavbarOpeningFromBurger = () => {
 const [navbarIsOpened, setNavbarIsOpened] = useState<boolean>(false);
 const handleNavbar = setNavbarIsOpened((prev) => !prev);
 return { navbarIsOpened, handleNavbar };
};
