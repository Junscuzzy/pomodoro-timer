import React, { useState } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";

import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import Fab from "@material-ui/core/Fab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

import { increment, decrement } from "../../api";

const useStyles = makeStyles(({ spacing }) => ({
  label: {
    textTransform: "capitalize"
  },
  value: {
    width: spacing(8)
  },
  buttons: {
    display: "flex",
    justifyContent: "space-between"
  }
}));

export default function Setter({ id, initialValue, toggleChange }) {
  const [value, setValue] = useState(initialValue);
  const classes = useStyles();

  const onChange = type => {
    let val;
    switch (type) {
      case "increment":
        val = increment(value);
        break;
      case "decrement":
        val = decrement(value);
        break;
      default:
        val = value;
        break;
    }
    setValue(val);
    toggleChange(val);
  };

  return (
    <div>
      <Typography id={`${id}-label`} variant="h6" className={classes.label}>
        {id}
      </Typography>

      <Box className={classes.buttons}>
        <Fab
          size="small"
          color="secondary"
          aria-label="increment"
          id={`${id}-increment`}
          onClick={() => onChange("increment")}
        >
          <AddIcon />
        </Fab>

        <Typography id={`${id}-length`} variant="h5" className={classes.value}>
          {value}
        </Typography>

        <Fab
          size="small"
          color="secondary"
          aria-label="decrement"
          id={`${id}-decrement`}
          onClick={() => onChange("decrement")}
        >
          <RemoveIcon />
        </Fab>
      </Box>
    </div>
  );
}

Setter.propTypes = {
  id: PropTypes.string.isRequired,
  initialValue: PropTypes.number.isRequired,
  toggleChange: PropTypes.func.isRequired
};
