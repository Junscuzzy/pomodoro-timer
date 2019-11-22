import React from "react";
import { shallow } from "../../enzyme";
import Footer from "./Footer";

const fnStartStop = jest.fn();
const fnReset = jest.fn();
const jsx = <Footer isOn={true} startStop={fnStartStop} reset={fnReset} />;
const jsxOff = <Footer isOn={false} startStop={fnStartStop} reset={fnReset} />;

describe("<Footer />", () => {
  it("Footer should render correctly", () => {
    const component = shallow(jsx);
    expect(component).toMatchSnapshot();
  });

  it("should be render a startStop button", () => {
    const component = shallow(jsx);
    const button = component.find("#start_stop");
    expect(button).toHaveLength(1);
  });

  it("should be render a reset button", () => {
    const component = shallow(jsx);
    const button = component.find("#reset");
    expect(button).toHaveLength(1);
  });

  test("startStop click", () => {
    const component = shallow(jsx);
    component.find("#start_stop").simulate("click");
    expect(fnStartStop).toHaveBeenCalled();
  });

  test("startStop click", () => {
    const component = shallow(jsx);
    component.find("#reset").simulate("click");
    expect(fnReset).toHaveBeenCalled();
  });

  test("StartStop label must be change with isOn", () => {
    const componentOn = shallow(jsx);
    const button = componentOn.find("#start_stop");
    expect(button.text()).toMatch(/stop/gi);

    const componentOff = shallow(jsxOff);
    const buttonOff = componentOff.find("#start_stop");
    expect(buttonOff.text()).toMatch(/start/gi);
  });
});
