// eslint-disable-next-line no-unused-vars
import React from "react";
import PropTypes from "prop-types";
import { useAudio } from "react-use";
import { SECOND } from "../../utils/api";

export default function Audio({ time, isRunning }) {
  const [audio, state, controls] = useAudio({
    src: isRunning ? "https://goo.gl/65cBl1" : null,
    id: "beep",
    volume: 1
  });

  if (state.time !== 0 || !isRunning) {
    controls.pause();
    controls.seek(0);
  }

  if (time < SECOND && state.time === 0 && isRunning) {
    controls.play();
  }

  return audio;
}

Audio.propTypes = {
  time: PropTypes.number,
  isRunning: PropTypes.bool
};

Audio.defaultProps = {
  time: 1,
  isRunning: false
};
