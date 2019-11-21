import React from "react";
import { useDispatch, useSelector } from "react-redux";

import Timer from "../Timer/Timer";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

import {
  startStop,
  reset,
  incrementBreak,
  decrementBreak,
  incrementSession,
  decrementSession,
  updateTime
} from "../../redux/actions/timerAction";

import { getFormatedDate } from "../../utils/api";

export default function AppContainer() {
  const { isOn, breakLength, sessionLength, time } = useSelector(
    state => state.timer
  );
  const dispatch = useDispatch();
  return (
    <>
      <Header
        breakLength={breakLength}
        sessionLength={sessionLength}
        incrementBreak={() => dispatch(incrementBreak())}
        decrementBreak={() => dispatch(decrementBreak())}
        incrementSession={() => dispatch(incrementSession())}
        decrementSession={() => dispatch(decrementSession())}
      />
      <Timer
        formatedDate={getFormatedDate(time)}
        tick={() => dispatch(updateTime(time))}
        isOn={isOn}
      />
      <Footer
        isOn={isOn}
        startStop={() => dispatch(startStop())}
        reset={() => dispatch(reset())}
      />
    </>
  );
}
