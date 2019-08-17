import React from "react";
import { mount } from "enzyme";
import TableList from "./TableList";

describe("TableList Test", () => {
  const onClickUpdateListMock = jest.fn();

  const mockBase = {
    loading: false,
    pokemons: [],
    name: "",
    isTypeFilter: false,
    pagination: { next: "", previous: "" },
    onClickUpdateList: onClickUpdateListMock
  };
  it("is pressent the loading component", () => {
    const wrapper = mount(<TableList {...{ ...mockBase, loading: true }} />);
    expect(wrapper.find("circle").length).toBe(1);
  });
  it("is pressent the data with expected lenght without pagination ", () => {
    const wrapper = mount(
      <TableList
        {...{
          ...mockBase,
          pokemons: [{ name: "bulbasaur" }, { name: "bulbasaur" }]
        }}
      />
    );
    expect(wrapper.find('div[test-id="pokemon-list"]').length).toBe(2);
    expect(
      wrapper
        .find("button")
        .at(0)
        .props().disabled
    ).toBe(true);
    expect(
      wrapper
        .find("button")
        .at(1)
        .props().disabled
    ).toBe(true);
  });
  it("data is pressent and have pagination", () => {
    const wrapper = mount(
      <TableList
        {...{
          ...mockBase,
          pokemons: [{ name: "bulbasaur" }, { name: "bulbasaur" }],
          pagination: { next: "next", previous: "previous" }
        }}
      />
    );
    expect(
      wrapper
        .find("button")
        .at(0)
        .props().disabled
    ).toBe(false);
    expect(
      wrapper
        .find("button")
        .at(1)
        .props().disabled
    ).toBe(false);
    wrapper
      .find("button")
      .at(0)
      .simulate("click");
    expect(onClickUpdateListMock).toBeCalled();
  });
});
