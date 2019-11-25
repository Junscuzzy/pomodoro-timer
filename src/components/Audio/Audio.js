/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { useAudio } from "react-use";
import { SECOND } from "../../utils/api";

export default function Audio({ time, isRunning }) {
  const [audio, state, controls] = useAudio({
    src: "https://goo.gl/65cBl1",
    id: "beep",
    volume: 1
  });

  useEffect(() => {
    if (state.time !== 0 || !isRunning) {
      controls.pause();
      controls.seek(0);
    }

    if (time < SECOND && state.time === 0 && isRunning) {
      controls.play();
    }
  }, [time, isRunning]);

  console.log({ state, time });
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
