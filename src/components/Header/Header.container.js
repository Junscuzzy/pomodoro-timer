import React from "react";
import { useDispatch, useSelector } from "react-redux";

import Header from "./Header";

import {
  incrementBreak,
  decrementBreak,
  incrementSession,
  decrementSession
} from "../../redux/actions/timerAction";

export default function HeaderContainer() {
  const { breakLength, sessionLength } = useSelector(state => state.timer);
  const dispatch = useDispatch();
  return (
    <Header
      breakLength={breakLength}
      sessionLength={sessionLength}
      incrementBreak={() => dispatch(incrementBreak(breakLength))}
      decrementBreak={() => dispatch(decrementBreak(breakLength))}
      incrementSession={() => dispatch(incrementSession(sessionLength))}
      decrementSession={() => dispatch(decrementSession(sessionLength))}
    />
  );
}
