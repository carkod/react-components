import { shallow } from "enzyme";
import React from "react";

import Autocomplete from "./Autocomplete";

describe("Autocomplete ", () => {
  it("renders", () => {
    const wrapper = shallow(<Autocomplete />);
    expect(wrapper).toMatchSnapshot();
  });

  it("shows the clear button when there is a value", () => {
    const wrapper = shallow(<Autocomplete value="admin" />);
    expect(wrapper.find(".p-search-box__reset").exists()).toBe(true);
  });

  it("can externally control the value", () => {
    const wrapper = shallow(
      <Autocomplete externallyControlled onChange={jest.fn()} value="admin" />
    );
    let input = wrapper.find(".p-search-box__input");
    expect(input.prop("defaultValue")).toBe(undefined);
    expect(input.prop("value")).toBe("admin");
    wrapper.setProps({ value: "new-admin" });
    input = wrapper.find(".p-search-box__input");
    expect(input.prop("value")).toBe("new-admin");
  });
});
