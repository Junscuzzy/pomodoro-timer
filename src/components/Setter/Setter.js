import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";

import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import Fab from "@material-ui/core/Fab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles(({ spacing }) => ({
  label: {
    textTransform: "capitalize"
  },
  value: {
    width: spacing(6)
  },
  buttons: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  }
}));

export default function Setter({ id, value, increment, decrement }) {
  const classes = useStyles();

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
          onClick={value => increment(value)}
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
          onClick={value => decrement(value)}
        >
          <RemoveIcon />
        </Fab>
      </Box>
    </div>
  );
}

Setter.propTypes = {
  id: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  increment: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired
};
