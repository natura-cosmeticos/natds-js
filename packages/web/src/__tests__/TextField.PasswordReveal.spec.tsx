import "jest-styled-components";

import * as React from "react";
import { assert, spy } from "sinon";

import { expect } from "chai";
import { shallow } from "enzyme";
import { themes } from "@naturacosmeticos/natds-styles";
import PasswordReveal from "../Components/TextField/PasswordReveal";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const getProps = (props: any = {}) => {
  const {
    hidePasswordIcon = () => <i className="hide" />,
    onTogglePasswordReveal = spy(),
    showing = false,
    showPasswordIcon = () => <i className="show" />,
    theme = themes.natura.light,
  } = props;

  return {
    hidePasswordIcon,
    onTogglePasswordReveal,
    showPasswordIcon,
    showing,
    theme,
  };
};

describe("TextField PasswordReveal component", () => {
  test("should render received showPasswordIcon", () => {
    const props = getProps({ showing: false });
    const component = shallow(<PasswordReveal {...props} />);
    const icon = shallow(props.showPasswordIcon());

    expect(component.html()).to.be.equal(icon.html());
  });

  test("should render received hidePasswordIcon", () => {
    const props = getProps({ showing: true });
    const component = shallow(<PasswordReveal {...props} />);
    const icon = shallow(props.hidePasswordIcon());

    expect(component.html()).to.be.equal(icon.html());
  });

  test("should render default showPasswordIcon", () => {
    const props = getProps({ showing: false });
    const component = shallow(<PasswordReveal {...props} showPasswordIcon={null} hidePasswordIcon={null} />);

    expect(component.html()).to.contain("svg");
  });

  test("should render default hidePasswordIcon", () => {
    const props = getProps({ showing: true });
    const component = shallow(<PasswordReveal {...props} showPasswordIcon={null} hidePasswordIcon={null} />);

    expect(component.html()).to.contain("svg");
  });

  test("should call onTogglePasswordReveal callback after click", () => {
    const props = getProps();
    const component = shallow(<PasswordReveal {...props} />);

    component.simulate("click");

    assert.calledOnce(props.onTogglePasswordReveal);
  });
});
