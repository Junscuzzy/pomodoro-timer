import React from "react";
import { shallow } from "../../enzyme";
import Timer from "./Timer";

const fnTick = jest.fn();
const jsx = (
  <Timer
    isRunning={true}
    label={"Session 1"}
    formatedDate="25:00"
    tick={fnTick}
  />
);

// jest.useFakeTimers();

describe("<Timer />", () => {
  it("Timer should render correctly", () => {
    const component = shallow(jsx);
    expect(component).toMatchSnapshot();
  });

  it("should be render a sessionName into #timer-label", () => {
    const component = shallow(jsx);
    const label = component.find("#timer-label");
    expect(label).toHaveLength(1);
    expect(label.text()).toBe("Session 1");
  });

  it("should be render a formated time into #timer-left", () => {
    const component = shallow(jsx);
    const time = component.find("#time-left");
    expect(time).toHaveLength(1);
    expect(time.text()).toBe("25:00");
  });

  // it("calls the callback after 1 second", () => {
  //   const component = shallow(jsx);

  //   // jest.runAllTimers();

  //   expect(component.find("#time-left").text()).toBe("25:00");
  //   jest.advanceTimersByTime(1000);
  //   expect(component.find("#time-left").text()).toBe("24:59");
  // });

  it("should not tick if timer if on each second", () => {
    // jest.useFakeTimers();
    // const component = shallow(jsx);
    // expect(component.find("#time-left").text()).toBe("25:00");
    // component.setProps({ isRunning: true });
    // jest.advanceTimersByTime(1000);
    // console.log({ isRunning: component.prop("isRunning") });
    // expect(fnTick).toBeCalled();
    // expect(component.prop("tick")).toBeCalled();
    // jest.useRealTimers();
  });

  it("should not tick if timer if off", () => {});
});
