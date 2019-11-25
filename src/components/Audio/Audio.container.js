import React from "react";
import { useSelector } from "react-redux";

import Audio from "./Audio";

export default function AudioContainer() {
  const { time, isRunning } = useSelector(state => state.timer);
  return <Audio time={time} isRunning={isRunning} />;
}
