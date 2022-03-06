import { makeStyles } from "@material-ui/core/styles";
import { AppBar, IconButton, Toolbar } from "@material-ui/core";
import SortIcon from "@material-ui/icons/Sort";
import React from "react";

const useStyles = makeStyles((theme: any) => ({
 root: {
  display: "flex",
  justifyContent: "center",
 },
 appBar: {
  background: "none",
 },
 appBarWrapper: {
  width: "100%",
  margin: "0 auto",
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
  <div className={classes.root}>
   <AppBar className={classes.appBar} elevation={0}>
    <Toolbar className={classes.appBarWrapper}>
     <h1 className={classes.appBarTitle}>Yasmina Corman</h1>
     <IconButton>
      <SortIcon className={classes.icon} />
     </IconButton>
    </Toolbar>
   </AppBar>
   <div>
    <h2>Yasmina Corman</h2>
   </div>
  </div>
 );
};

export default Header;
