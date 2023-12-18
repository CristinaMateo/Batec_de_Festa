import React from "react";
import { shallow } from "enzyme";
import Update from "./Update";

describe("Update", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Update />);
    expect(wrapper).toMatchSnapshot();
  });
});
