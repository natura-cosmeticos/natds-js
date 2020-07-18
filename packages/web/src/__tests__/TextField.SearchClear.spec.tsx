import "jest-styled-components";

import * as React from "react";
import { assert, spy } from "sinon";

import { expect } from "chai";
import { shallow } from "enzyme";
import { themes } from "@naturacosmeticos/natds-styles";
import SearchClear from "../Components/TextField/SearchClear";

const getProps = (props: any = {}) => {
  const {
    onClearSearch = spy(),
    searchIcon = () => <i />,
    theme = themes.natura.light,
  } = props;

  return {
    onClearSearch,
    searchIcon,
    theme,
  };
};

describe("TextField SearchClear component", () => {
  test("should render received Icon", () => {
    const props = getProps();
    const component = shallow(<SearchClear {...props} />);
    const icon = shallow(props.searchIcon());

    expect(component.html()).to.be.equal(icon.html());
  });

  test("should render default Icon", () => {
    const props = getProps();
    const component = shallow(<SearchClear {...props} searchIcon={undefined} />);

    expect(component.html()).to.contain("svg");
  });

  test("should call onClearSearch callback after click", () => {
    const props = getProps();
    const component = shallow(<SearchClear {...props} />);

    component.simulate("click");

    assert.calledOnce(props.onClearSearch);
  });
});
