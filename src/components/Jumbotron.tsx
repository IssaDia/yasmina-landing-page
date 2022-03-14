import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import profile from "/assets/profil-pic-yasmina.png";

const useStyles = makeStyles(() => ({
 jumbotronUpPart: {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
 },
 jumbotronDownPart: {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-evenly",
  alignItems: "center",
 },
 jumbotronTitle: {
  fontFamily: "Playlist",
  fontSize: "100px",
  marginTop: "-10px",
  marginBottom: 0,
 },
 jumbotronSubtitle: {
  fontFamily: "Lora",
  fontSize: "35px",
  marginTop: 0,
 },
 jumbotronCatchPhrase: {
  fontFamily: "Lora",
  fontSize: "50px",
 },
}));
const Jumbotron: React.FC = () => {
 const classes = useStyles();
 return (
  <div>
   <div className={classes.jumbotronUpPart}>
    <h1 className={classes.jumbotronTitle}>Yasmina Corman</h1>
    <p className={classes.jumbotronSubtitle}>
     réussir et briller en toute confiance
    </p>
   </div>
   <div className={classes.jumbotronDownPart}>
    <h2 className={classes.jumbotronCatchPhrase}>
     <b>Amputé(e)</b> de l&apos;expression de ta <b>créativité</b> et de ta
     singularité? Je t&apos;accompagne à <b>exprimer qui tu es</b> !
    </h2>
    <img src={profile} alt="yasmina-corman-image" />
   </div>
  </div>
 );
};

export default Jumbotron;
