import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { CssBaseline } from "@material-ui/core";
import AboutHeader from "./AboutHeader";
import AboutPictures from "./AboutPictures";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    minHeight: "310vh",
    backgroundImage: `url(${process.env.PUBLIC_URL + "/assets/cabbage.jpg"})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },
}));

export default function Home() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <AboutHeader />
      <AboutPictures />
      <div></div>
    </div>
  );
}
