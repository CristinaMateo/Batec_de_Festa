import React from "react";
import { shallow } from "enzyme";
import EventCard from "./EventCard";

describe("EventCard", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<EventCard />);
    expect(wrapper).toMatchSnapshot();
  });
});
