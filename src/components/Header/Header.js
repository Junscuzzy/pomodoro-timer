import React from "react";
import PropTypes from "prop-types";

import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

import Setter from "../Setter/Setter";

const useStyles = makeStyles(({ spacing }) => ({
  title: {
    marginTop: spacing(4),
    marginBottom: spacing(3)
  },
  container: {
    marginBottom: spacing(2),
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap"
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
    <>
      <Typography className={classes.title} component="h1" variant="h4">
        {title}
      </Typography>
      <Grid container className={classes.container}>
        <Grid item xs={6}>
          <Setter
            id="break"
            value={breakLength}
            increment={incrementBreak}
            decrement={decrementBreak}
          />
        </Grid>
        <Grid item xs={6}>
          <Setter
            id="session"
            value={sessionLength}
            increment={incrementSession}
            decrement={decrementSession}
          />
        </Grid>
      </Grid>
    </>
  );
}

Header.propTypes = {
  title: PropTypes.string,
  breakLength: PropTypes.number.isRequired,
  sessionLength: PropTypes.number.isRequired,
  incrementBreak: PropTypes.func.isRequired,
  decrementBreak: PropTypes.func.isRequired,
  incrementSession: PropTypes.func.isRequired,
  decrementSession: PropTypes.func.isRequired
};

Header.defaultProps = {
  title: "Pomodoro"
};

export default Header;
