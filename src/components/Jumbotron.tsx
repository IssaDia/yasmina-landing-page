import { makeStyles } from "@material-ui/core/styles";
import React from "react";

const useStyles = makeStyles(() => ({
 jumbotronUpPart: {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  marginTop: "-80px",
 },
 jumbotronDownPart: {
  display: "flex",
 },
 jumbotronTitle: {
  fontFamily: "Playlist",
  fontSize: "100px",
 },
}));
const Jumbotron: React.FC = () => {
 const classes = useStyles();
 return (
  <div>
   <div className={classes.jumbotronUpPart}>
    <h1 className={classes.jumbotronTitle}>Yasmina Corman</h1>
    <p>réussir et briller en toute confiance</p>
   </div>
   <div className={classes.jumbotronUpPart}>
    <h2>texte</h2>
    <p>img</p>
   </div>
  </div>
 );
};

export default Jumbotron;
