import React from "react";
import { mount } from "enzyme";
import HeaderFilter from "./HeaderFilter";

describe("HeaderFilter Tests", () => {
  const onClickSearchMock = jest.fn();
  const handleTypeChangeMock = jest.fn();
  const handleChangeMock = jest.fn();
  const headerProps = {
    name: "",
    handleChange: handleChangeMock,
    searchType: "",
    handleTypeChange: handleTypeChangeMock,
    onClickSearch: onClickSearchMock
  };

  it("onClickSearch test when is clicked the button", () => {
    const wrapper = mount(<HeaderFilter {...headerProps} />);
    wrapper.find("button").simulate("click");
    expect(onClickSearchMock).toBeCalled();
    wrapper.unmount();
  });
  it("handleChange test when is change the input", () => {
    const wrapper = mount(<HeaderFilter {...headerProps} />);
    wrapper
      .find("input")
      .at(0)
      .simulate("change", "data");
    expect(handleChangeMock).toBeCalled();
    wrapper.unmount();
  });
  it("handleTypeChange test when is change the type", () => {
    const wrapper = mount(<HeaderFilter {...headerProps} />);
    wrapper
      .find("input")
      .at(2)
      .simulate("change");
    expect(handleTypeChangeMock).toBeCalled();
    wrapper.unmount();
  });
});
