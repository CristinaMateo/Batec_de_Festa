import React from "react";
import { shallow } from "enzyme";
import MyEvents from "./MyEvents";

describe("MyEvents", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<MyEvents />);
    expect(wrapper).toMatchSnapshot();
  });
});
