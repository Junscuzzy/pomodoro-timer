// eslint-disable-next-line no-unused-vars
import React from "react";
import PropTypes from "prop-types";
import { useAudio } from "react-use";
import { SECOND } from "../../utils/api";
import audioSrc from "../../assets/music/BeepSound.wav";

export default function Audio({ time, isRunning }) {
  const [audio, state, controls] = useAudio({
    src: audioSrc,
    // src: isRunning ? "https://goo.gl/65cBl1" : "", // To pass FCC tests but break song
    id: "beep",
    volume: 1
  });

  if (!isRunning) {
    if (!state.paused) {
      controls.pause();
    }
    if (state.time !== 0) {
      controls.seek(0);
    }
  }

  if (time < SECOND && state.time === 0 && isRunning) {
    controls.play();
  }

  if (isRunning) {
    return audio;
  } else {
    return <audio id="beep" />;
  }
}

Audio.propTypes = {
  time: PropTypes.number,
  isRunning: PropTypes.bool
};

Audio.defaultProps = {
  time: 1,
  isRunning: false
};
