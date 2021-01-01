import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Container from "../../generic/containers/Container";

const useStyles = makeStyles((theme) => ({
  root: { flexGrow: 1 },
  appbar: {
    backgroundColor: "#FFFFFF",
    color: "#000000",
    position: "relative",
  },
  toolbar: {},

  menuButton: {
    color: "rgba(0,0,0,.5)",
    border: "solid 1px rgba(0,0,0,.1)",
    borderRadius: "4px",
    padding: "4px 8px",
    position: "absolute",
    top: "50%",
    right: "0",
    transform: "translate(0%, -50%)",
  },
  logo: { maxHeight: "150px", maxWidth: "65%", padding: "30px 0" },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar className={classes.appbar}>
        <Toolbar className={classes.toolbar}>
          <Container style={{ position: "relative" }}>
            <img
              src="media/ExpressTest-logo-01.svg"
              className={classes.logo}
              alt=""
            />

            <IconButton
              style={{}}
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
            >
              <MenuIcon />
            </IconButton>
          </Container>
        </Toolbar>
      </AppBar>
    </div>
  );
}
