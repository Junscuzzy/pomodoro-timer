import React from "react";
import { shallow } from "../../enzyme";
import Header from "./Header";

const fnIBClick = jest.fn();
const fnDBClick = jest.fn();
const fnISClick = jest.fn();
const fnDSClick = jest.fn();
const jsx = (
  <Header
    title="Pomodoro"
    breakLength={5}
    sessionLength={25}
    incrementBreak={fnIBClick}
    decrementBreak={fnDBClick}
    incrementSession={fnISClick}
    decrementSession={fnDSClick}
  />
);

describe("<Header />", () => {
  describe("Test the HTML structure", () => {
    it("Header should render correctly", () => {
      const component = shallow(jsx);
      expect(component).toMatchSnapshot();
    });
  });
});
