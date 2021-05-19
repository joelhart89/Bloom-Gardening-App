import React from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import NestedList from "./Dropdown";
import "./Sidebar.scss";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const drawerWidth = 300;

const useStyles = makeStyles((theme) => ({
  sidebar: {
    display: "flex",
    backgroundColor: "#b1d2db",
    justifyContent: "center",
    alignItems: "center",
    color: "#202020",
    height: "100vh",
    fontFamily: "Nunito",
  },
  sideBar: {
    backgroundColor: "#1b2e28",
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  sideBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },

  menuButton: {
    marginRight: 36,
    color: "#b1d2db",
  },
  hide: {
    display: "none",
  },

  h1:{
    display:'flex',
    alignItems: 'center',
    justifyContent: 'space-around',

  },
  colorTextLogout: {
    display: 'flex',
    maxWidth: '800px',
    flexGrow: '1',
    color: "#b1d2db",
    alignItems: 'center',
  },
  colorTextBloom: {
    display: 'flexbox',
    justifyContent: 'left',
    color: "#b1d2db",
    alignItems: 'center',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
    backgroundColor: "#b1d2db",
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: "flex",
    paddingLeft: "10px",
    alignItems: "start",
    justifyContent: "space-around",
    color: "#b1d2db",
    fontSize: "2em",
    fontWeight: "bold",

    padding: theme.spacing(-1, 4),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },

  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));

export default function Sidebar() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className="sidebar">
      <CssBaseline />
      <AppBar
        position="fixed"
        color="default"
        className={clsx(classes.sideBar, {
          [classes.sideBarShift]: open,
        })}
      >
        <Toolbar className="nav">
          <IconButton
            color="white"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <MenuIcon />
          </IconButton>
          <h1 className={classes.h1}>
            <Link> to="/Home"<span className={classes.colorTextBloom}>Bloom</span>
            <span className={classes.colorTextLogout}>Logout</span> </Link>
            

          </h1>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className="toolbar">
          <h2 className={classes.toolbar}>
            {" "}
            Welcome Bubba
            <IconButton onClick={handleDrawerClose} className={classes.toolbar}>
              {theme.direction === "rtl" ? (
                <ChevronRightIcon />
              ) : (
                <ChevronLeftIcon />
              )}
            </IconButton>
          </h2>
        </div>

        <NestedList />
      </Drawer>
    </div>
  );
}
