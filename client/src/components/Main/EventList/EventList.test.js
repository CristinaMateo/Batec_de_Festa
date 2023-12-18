import React from "react";
import { shallow } from "enzyme";
import EventList from "./EventList";

describe("EventList", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<EventList />);
    expect(wrapper).toMatchSnapshot();
  });
});
