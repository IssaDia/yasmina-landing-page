import { makeStyles } from "@material-ui/core/styles";
import { AppBar, IconButton, Toolbar } from "@material-ui/core";
import SortIcon from "@material-ui/icons/Sort";
import React from "react";

// components
import Jumbotron from "./Jumbotron";

const useStyles = makeStyles((theme: any) => ({
 headerContainer: {
  minHeight: "100vh",
  backgroundImage: `url(${
   process.env.PUBLIC_URL + "/assets/bandeau-site.svg"
  })`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
 },
 appBar: {
  background: "none",
 },
 toolbarContainer: {
  //   display: "flex",
  //   justifyContent: "space-between",
  //   width: "100%",
  //   margin: "0 auto",
 },
 appBarTitle: {
  flexGrow: 1,
 },
 icon: {
  color: "#000",
  fontSize: "2rem",
 },
}));
const Header: React.FC = () => {
 const classes = useStyles();
 return (
  <div className={classes.headerContainer}>
   <AppBar className={classes.appBar} elevation={0} />
   <Toolbar className={classes.toolbarContainer}>
    <h1 className={classes.appBarTitle}>Yasmina Corman</h1>
    <IconButton>
     <SortIcon className={classes.icon} />
    </IconButton>
   </Toolbar>

   <div>
    <Jumbotron />
   </div>
  </div>
 );
};

export default Header;
