import React from "react";
import PropTypes from "prop-types";

import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

import Setter from "./Setter/Setter";

const useStyles = makeStyles(({ spacing, palette }) => ({
  wrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  title: {},
  buttons: {
    marginBottom: spacing(4),
    width: "100%",
    display: "flex",
    justifyContent: "space-between"
  }
}));

function Header({ title }) {
  const classes = useStyles();
  return (
    <Box className={classes.wrapper}>
      <Typography className={classes.title} component="h1" variant="h3">
        {title}
      </Typography>
      <Box className={classes.buttons}>
        <Setter
          id="break"
          initialValue={5}
          toggleChange={breakLength => console.log(breakLength)}
        />
        <Setter
          id="session"
          initialValue={25}
          toggleChange={sessionLength => console.log(sessionLength)}
        />
      </Box>
    </Box>
  );
}

Header.propTypes = {
  title: PropTypes.string
};

Header.defaultPros = {
  title: "Pomodoro"
};

export default Header;
