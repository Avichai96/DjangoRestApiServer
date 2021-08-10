import React from "react";
import classes from "../style/startbar.module.css";
import { AppBar, Toolbar, Typography, IconButton } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

function StartBar(props) {
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={props.onShowUsers}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Contacts List
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default StartBar;
