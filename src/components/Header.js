import React from "react";
import { Link } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { withStyles } from "@material-ui/core/styles";
import Weather from "./Weather";
import AppIcon from './AppIcon';

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
  const AppIconStyles = {
    color: 'gray',
    size: '1.2em',
    style: {},
  }

  const name = "EOG";
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" color="inherit" className={classes.grow}>
          <Link className={classes.linkButton} to="/">
            <AppIcon {...AppIconStyles} /> <strong>{name}</strong>
          </Link>
        </Typography>
        <Weather />
      </Toolbar>
    </AppBar>
  );
};

export default withStyles(styles)(Header);
