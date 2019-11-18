import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "../../enzyme";
import App from "./App";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

// describe("FreeCodeCamp tests", () => {
//   it('US #1: I can see an element with id="break-label"', () => {
//     const app = shallow(<App />);
//     const label = app.find("#break-label");
//     expect(label).toHaveLength(1);
//   });

//   it('US #1: Element with id="break-label" contains a string', () => {
//     const app = shallow(<App />);
//     const text = app.find("#break-label").text();
//     expect(text).not.toBe(null);
//     expect(text).not.toBe("");
//     expect(text).not.toBe(undefined);
//   });

//   it('US #2: I can see an element with id="session-label"', () => {
//     const app = shallow(<App />);
//     const label = app.find("#session-label");
//     expect(label).toHaveLength(1);
//   });

//   it('US #2: Element with id="session-label" contains a string', () => {
//     const app = shallow(<App />);
//     const text = app.find("#session-label").text();
//     expect(text).not.toBe(null);
//     expect(text).not.toBe("");
//     expect(text).not.toBe(undefined);
//   });

//   it('US #3: Have two clickable elements with IDs: "break-decrement" and "session-decrement"', () => {
//     const app = shallow(<App />);
//     const breakDecrement = app.find("#break-decrement");
//     const sessionDecrement = app.find("#session-decrement");
//     expect(breakDecrement).toHaveLength(1);
//     expect(sessionDecrement).toHaveLength(1);
//   });

//   it('US #4: Have two clickable elements with IDs: "break-increment" and "session-increment"', () => {
//     const app = shallow(<App />);
//     const breakIncrement = app.find("#break-increment");
//     const sessionIncrement = app.find("#session-increment");
//     expect(breakIncrement).toHaveLength(1);
//     expect(sessionIncrement).toHaveLength(1);
//   });

//   it('US #5: I can see an element with a corresponding id="break-length"', () => {
//     const app = shallow(<App />);
//     const breakLength = app.find("#break-length");
//     expect(breakLength).toHaveLength(1);
//   });

//   it('US #5: Element id="break-length" displays a value of 5 by default', () => {
//     const app = shallow(<App />);
//     const breakLength = app.find("#break-length").text();
//     expect(breakLength).toBe(String(5));
//   });

//   it('US #6: I can see an element with a corresponding id="session-length"', () => {
//     const app = shallow(<App />);
//     const breakLength = app.find("#session-length");
//     expect(breakLength).toHaveLength(1);
//   });

//   it('US #6: Element id="session-length" displays a value of 5 by default', () => {
//     const app = shallow(<App />);
//     const breakLength = app.find("#session-length").text();
//     expect(breakLength).toBe(String(25));
//   });

//   it('US #7: I can see an element id="timer-label" that contains a string', () => {
//     const app = shallow(<App />);
//     const label = app.find("#timer-label");

//     expect(label).toHaveLength(1);
//     expect(label.text()).not.toBe(null);
//     expect(label.text()).not.toBe("");
//     expect(label.text()).not.toBe(undefined);
//   });

//   it('US #8: Have a #time-left element with formated "mm:ss" text', () => {
//     const app = shallow(<App />);
//     const timer = app.find("#time-left");

//     expect(timer).toHaveLength(1);
//     expect(timer.text()).toMatch(/^([0-1][0-9]|2[0-5]):[0-5][0-9]$/g);
//   });

//   it('US #9: I can see an element with a corresponding id="start_stop"', () => {
//     const app = shallow(<App />);
//     const breakLength = app.find("#start_stop");
//     expect(breakLength).toHaveLength(1);
//   });

//   it('US #10: I can see an element with a corresponding id="reset"', () => {
//     const app = shallow(<App />);
//     const breakLength = app.find("#reset");
//     expect(breakLength).toHaveLength(1);
//   });
// });
