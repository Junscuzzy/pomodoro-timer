import React from "react";
import PropTypes from "prop-types";

import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

import Setter from "../Setter/Setter";

const useStyles = makeStyles(({ spacing }) => ({
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

function Header({
  title,
  breakLength,
  sessionLength,
  incrementBreak,
  decrementBreak,
  incrementSession,
  decrementSession
}) {
  const classes = useStyles();

  return (
    <Box py={2} px={4}>
      <Typography className={classes.title} component="h1" variant="h3">
        {title}
      </Typography>
      <Box className={classes.buttons}>
        <Setter
          id="break"
          value={breakLength}
          increment={incrementBreak}
          decrement={decrementBreak}
        />
        <Setter
          id="session"
          value={sessionLength}
          increment={incrementSession}
          decrement={decrementSession}
        />
      </Box>
    </Box>
  );
}

Header.propTypes = {
  title: PropTypes.string,
  incrementBreak: PropTypes.func.isRequired,
  decrementBreak: PropTypes.func.isRequired,
  incrementSession: PropTypes.func.isRequired,
  decrementSession: PropTypes.func.isRequired
};

Header.defaultProps = {
  title: "Pomodoro"
};

export default Header;
