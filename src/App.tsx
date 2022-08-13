import React, { createContext, useContext, useState } from "react";
import Layout from "./components/Layout";
import Home from "./templates/Home";

export type CalendlyIsActiveProps = {
 calendlyIsActive: boolean;
 setCalendlyIsActive: (c: boolean) => void;
};

export const CalendlyContext = createContext<CalendlyIsActiveProps>({
 calendlyIsActive: false,
 // eslint-disable-next-line @typescript-eslint/no-empty-function
 setCalendlyIsActive: () => {},
});

export const usCalendlyContext = () => useContext(CalendlyContext);

const App: React.FC = () => {
 const [calendlyIsActive, setCalendlyIsActive] = useState<boolean>(false);

 return (
  <CalendlyContext.Provider value={{ calendlyIsActive, setCalendlyIsActive }}>
   <Layout>
    <Home />
   </Layout>
  </CalendlyContext.Provider>
 );
};

export default App;
