
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ImageCard from "./ImageCard";
import places from "./hero";
import useWindowPosition from "../../hooks/useWindowPosition";
import './Pictures.scss'
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  div1: {
    minHeight: "50vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
    },
  },
  div2: {
    minHeight: "50vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
    },
  },

  div3: {
    minHeight: "50vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
    },
  },
}));
export default function () {
  const classes = useStyles();
  const checked = useWindowPosition("header");
  return (
    <div>
      <div className={classes.div1} id="place-to-visit">
        <ImageCard place={places[0]} checked={checked} />
        <ImageCard place={places[1]} checked={checked} />
      </div>

      <div className={classes.div2}>
        <ImageCard place={places[2]} checked={checked} />
        <ImageCard place={places[3]} checked={checked} />
      </div>
      <div className={classes.div3}>
        <Link to="/vegetables" class="animated-word">
        <div class="container">
          <p>GET STARTED</p>
        </div>
        </Link>
      </div>
    </div>
  );
}