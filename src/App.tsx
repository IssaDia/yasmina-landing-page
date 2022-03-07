import React from "react";
import { CssBaseline } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Header from "./components/Header";

const useStyles = makeStyles((theme: any) => ({
 root: {},
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
