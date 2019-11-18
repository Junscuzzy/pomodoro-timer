import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "../../enzyme";
import Setter from "./Setter";

describe("<Setter />", () => {
  it("Must contains a label with an id", () => {
    const component = shallow(<Setter id="test" initialValue={5} />);
    const label = component.find("#test-label");
    expect(label).toHaveLength(1);
  });

  it("Must contains a increment button with an id", () => {
    const component = shallow(<Setter id="test" initialValue={5} />);
    const increment = component.find("#test-increment");
    expect(increment).toHaveLength(1);
  });

  it("Must contains a decrement button with an id", () => {
    const component = shallow(<Setter id="test" initialValue={5} />);
    const decrement = component.find("#test-decrement");
    expect(decrement).toHaveLength(1);
  });

  it("Must contains a text with an id contains value", () => {
    const component = shallow(<Setter id="test" initialValue={5} />);
    const text = component.find("#test-length");
    expect(text).toHaveLength(1);

    expect(text.text()).not.toBe(null);
    expect(text.text()).not.toBe("");
    expect(text.text()).not.toBe(undefined);
  });
});
