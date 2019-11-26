import React from "react";
import { useDispatch, useSelector } from "react-redux";

import Timer from "./Timer";
import { updateTime } from "../../redux/actions/timerAction";
import { getFormatedDate } from "../../utils/api";

export default function AppContainer() {
  const { isRunning, time, counter, timerType, percentage } = useSelector(
    state => state.timer
  );
  const dispatch = useDispatch();
  return (
    <Timer
      percentage={percentage}
      counter={counter}
      timerType={timerType}
      formatedDate={getFormatedDate(time)}
      tick={() => dispatch(updateTime(time))}
      isRunning={isRunning}
    />
  );
}
