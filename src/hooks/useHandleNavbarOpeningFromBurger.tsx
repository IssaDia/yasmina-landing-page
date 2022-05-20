import { useState } from "react";

export const useHandleNavbarOpeningFromBurger = () => {
 const [navbarIsOpened, setNavbarIsOpened] = useState<boolean>(false);
 setNavbarIsOpened((prev) => !prev);
 return navbarIsOpened;
};
