import React from "react";
import { Link } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { withStyles } from "@material-ui/core/styles";
import Weather from "./Weather";

const styles = {
  grow: {
    flexGrow: 1
  },
  linkButton: {
    textDecoration: "none",
    color: "white"
  }
};

const Header = props => {
  const { classes } = props;

  const name = "Drone's Statistic";
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" color="inherit" className={classes.grow}>
          <Link className={classes.linkButton} to="/">
            {name} EOG
          </Link>
        </Typography>
        <Weather />
      </Toolbar>
    </AppBar>
  );
};

export default withStyles(styles)(Header);
