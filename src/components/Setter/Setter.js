import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";

import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import DoubleArrowRoundedIcon from "@material-ui/icons/DoubleArrowRounded";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center"
  },
  label: {
    textTransform: "capitalize"
  },
  value: {
    width: theme.spacing(6)
    // fontFamily: "Orbitron"
  }
}));

export default function Setter({ id, value, increment, decrement }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button
        size="small"
        aria-label="increment"
        id={`${id}-increment`}
        onClick={value => increment(value)}
      >
        <DoubleArrowRoundedIcon
          color="secondary"
          style={{ transform: "rotate(-90deg)" }}
        />
      </Button>

      <Typography
        id={`${id}-length`}
        variant="h5"
        component="p"
        className={classes.value}
      >
        {value}
      </Typography>

      <Button
        size="small"
        aria-label="decrement"
        id={`${id}-decrement`}
        onClick={value => decrement(value)}
      >
        <DoubleArrowRoundedIcon
          color="secondary"
          style={{ transform: "rotate(90deg)" }}
        />
      </Button>

      <Typography id={`${id}-label`} variant="body1" className={classes.label}>
        {id}
      </Typography>
    </div>
  );
}

Setter.propTypes = {
  id: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  increment: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired
};
