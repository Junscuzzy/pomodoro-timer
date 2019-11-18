import React from "react";
import PropTypes from "prop-types";

import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

import Setter from "../Setter/Setter";

const useStyles = makeStyles(({ spacing, palette }) => ({
  title: {
    marginTop: spacing(4),
    marginBottom: spacing(2)
  },
  buttons: {
    marginBottom: spacing(2),
    width: "100%",
    display: "flex",
    justifyContent: "space-between"
  }
}));

function Header({ title, showingSetter }) {
  const classes = useStyles();
  return (
    <Box p={2}>
      <Typography className={classes.title} component="h1" variant="h3">
        {title}
      </Typography>
      {showingSetter && (
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
      )}
    </Box>
  );
}

Header.propTypes = {
  title: PropTypes.string,
  showingSetter: PropTypes.bool
};

Header.defaultProps = {
  title: "Pomodoro",
  showingSetter: true
};

export default Header;
