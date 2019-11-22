import React from "react";
import { useDispatch, useSelector } from "react-redux";

import Timer from "./Timer";
import { updateTime } from "../../redux/actions/timerAction";
import { getFormatedDate } from "../../utils/api";

export default function AppContainer() {
  const { isOn, time } = useSelector(state => state.timer);
  const dispatch = useDispatch();
  return (
    <Timer
      formatedDate={getFormatedDate(time)}
      tick={() => dispatch(updateTime(time))}
      isOn={isOn}
    />
  );
}
