import React from "react";
import { mount } from "enzyme";
import HeaderFilter from "./HeaderFilter";

const findInputByTestId = (wrapper, testId) => {
  return wrapper.find(`input[type="${testId}"]`);
};

describe("HeaderFilter Tests", () => {
  const handleTypeChangeMock = jest.fn();
  const handleChangeMock = jest.fn();

  it("handleChange test when is change the input", () => {
    const wrapper = mount(
      <HeaderFilter
        searchType="all"
        handleChange={handleChangeMock}
        name=""
        handleTypeChange={handleTypeChangeMock}
      />
    );
    findInputByTestId(wrapper, "text").simulate("change", "data");
    expect(handleChangeMock).toBeCalled();
    wrapper.unmount();
  });
  it("handleTypeChange test when is change the type", () => {
    const wrapper = mount(
      <HeaderFilter
        searchType="all"
        handleChange={handleChangeMock}
        name=""
        handleTypeChange={handleTypeChangeMock}
      />
    );
    findInputByTestId(wrapper, "radio")
      .at(0)
      .simulate("change");
    expect(handleTypeChangeMock).toBeCalled();
    wrapper.unmount();
  });
});
