import React from "react";
import { mount } from "enzyme";
import TableList from "./TableList";

const findButtonByTestId = (wrapper, testId) => {
  return wrapper.find(`button[test-id="${testId}"]`);
};

const isButtonDisabled = (wrapper, testId) => {
  return findButtonByTestId(wrapper, testId).props().disabled;
};

describe("TableList Test", () => {
  const onClickUpdateListMock = jest.fn();

  const mockBase = {
    loading: false,
    name: "",
    isTypeFilter: false,
    onClickUpdateList: onClickUpdateListMock
  };
  it("is pressent the loading component", () => {
    const wrapper = mount(
      <TableList
        loading={true}
        name=""
        onClickUpdateList={onClickUpdateListMock}
        isTypeFilter={false}
        data={{}}
      />
    );
    expect(wrapper.find("circle").length).toBe(1);
  });
  it("is pressent the data with expected lenght without pagination ", () => {
    const wrapper = mount(
      <TableList
        loading={false}
        name=""
        onClickUpdateList={onClickUpdateListMock}
        isTypeFilter={false}
        data={{ results: [{ name: "bulbasaur" }, { name: "bulbasaur" }] }}
      />
    );
    expect(wrapper.find('td[test-id="pokemon-list"]').length).toBe(2);
    expect(isButtonDisabled(wrapper, "prev-button")).toBe(true);
    expect(isButtonDisabled(wrapper, "next-button")).toBe(true);
  });
  it("data is pressent and have pagination", () => {
    const wrapper = mount(
      <TableList
        loading={false}
        name=""
        onClickUpdateList={onClickUpdateListMock}
        isTypeFilter={false}
        data={{ next: "next", previous: "previous" }}
      />
    );
    expect(isButtonDisabled(wrapper, "prev-button")).toBe(false);
    expect(isButtonDisabled(wrapper, "next-button")).toBe(false);
    findButtonByTestId(wrapper, "prev-button").simulate("click");
    expect(onClickUpdateListMock).toBeCalled();
  });
});
