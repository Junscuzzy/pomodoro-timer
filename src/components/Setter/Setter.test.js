import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "../../enzyme";
import Setter from "./Setter";

const fnIncrementClick = jest.fn();
const fnDecrementClick = jest.fn();
const jsx = (
  <Setter
    id="test"
    value={5}
    increment={fnIncrementClick}
    decrement={fnDecrementClick}
  />
);

describe("<Setter />", () => {
  describe("Test the HTML structure", () => {
    it("sidebar should render correctly", () => {
      const component = shallow(jsx);
      expect(component).toMatchSnapshot();
    });

    it("Must contains a label, two buttons and value with an id", () => {
      const component = shallow(jsx);

      const label = component.find("#test-label");
      const increment = component.find("#test-increment");
      const decrement = component.find("#test-decrement");
      const value = component.find("#test-length");

      expect(label).toHaveLength(1);
      expect(increment).toHaveLength(1);
      expect(decrement).toHaveLength(1);
      expect(value).toHaveLength(1);
    });
  });

  it("Must increment on click button", () => {
    const component = shallow(jsx);
    component.find("#test-increment").simulate("click");
    expect(fnIncrementClick).toHaveBeenCalled();
  });

  it("Must decrement on click button", () => {
    const component = shallow(jsx);
    component.find("#test-decrement").simulate("click");
    expect(fnDecrementClick).toHaveBeenCalled();
  });

  it("Must contains a value", () => {
    const component = shallow(jsx);
    const text = component.find("#test-length");
    expect(text).toHaveLength(1);
    expect(text.text()).toBe("5");
  });
});
