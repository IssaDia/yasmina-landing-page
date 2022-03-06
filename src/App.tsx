import React from "react";
import { CssBaseline } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Header from "./components/Header";

const useStyles = makeStyles((theme: any) => ({
 root: {
  minHeight: "100vh",
  backgroundImage: `url(${
   process.env.PUBLIC_URL + "/assets/bandeau-site.svg"
  })`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
 },
}));
const App: React.FC = () => {
 const classes = useStyles();
 return (
  <div className={classes.root}>
   <CssBaseline />
   <Header />
  </div>
 );
};

export default App;
