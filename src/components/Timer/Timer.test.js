import React from "react";
import { shallow } from "../../enzyme";
import Timer from "./Timer";

const fnTick = jest.fn();
const jsx = (
  <Timer isOn={true} label={"Session 1"} formatedDate="25:00" tick={fnTick} />
);

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

  it("should not tick if timer if on each second", () => {});

  it("should not tick if timer if off", () => {});
});
