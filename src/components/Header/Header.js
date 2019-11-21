import React from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";

import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

import Setter from "../Setter/Setter";
import {
  incrementBreak,
  decrementBreak,
  incrementSession,
  decrementSession
} from "../../redux/actions/timerAction";

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

function Header({ title }) {
  const classes = useStyles();
  const { breakLength, sessionLength } = useSelector(state => state.timer);
  const dispatch = useDispatch();

  return (
    <Box py={2} px={4}>
      <Typography className={classes.title} component="h1" variant="h3">
        {title}
      </Typography>
      <Box className={classes.buttons}>
        <Setter
          id="break"
          value={breakLength}
          increment={() => dispatch(incrementBreak())}
          decrement={() => dispatch(decrementBreak())}
        />
        <Setter
          id="session"
          value={sessionLength}
          increment={() => dispatch(incrementSession())}
          decrement={() => dispatch(decrementSession())}
        />
      </Box>
    </Box>
  );
}

Header.propTypes = {
  title: PropTypes.string
};

Header.defaultProps = {
  title: "Pomodoro"
};

export default Header;
