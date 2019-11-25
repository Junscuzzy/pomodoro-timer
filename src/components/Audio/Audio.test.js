import React from "react";
import { shallow } from "../../enzyme";
import Audio from "./Audio";

const jsx = <Audio />;

describe("<Audio />", () => {
  it("should renders without crashing", () => {
    const component = shallow(jsx);
    expect(component).toMatchSnapshot();
  });

  test('I can see a HTML5 <audio/> tag with "#beep" ID', () => {
    const component = shallow(jsx);
    expect(component.find("audio").prop("id")).toBe("beep");
  });

  // test("Audio must start when countdown is 00:00", () => {});

  // test("Audio must during 1 second", () => {});

  // test("Audio song must be stop if user click on #reset", () => {});
});
