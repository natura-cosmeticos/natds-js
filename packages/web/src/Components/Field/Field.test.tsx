import * as React from "react";
import * as TestRenderer from "react-test-renderer";
import { Field } from "./Field";
import { ITextFieldProps } from "../TextField";
import { themes } from "../../Themes";

const getProps = (props: Partial<ITextFieldProps> = {}) => {
  const {
    disabled,
    helpText = "Assistive text",
    id = "field",
    label = "Label",
    mask,
    placeholder = "Placeholder",
    required,
    state,
    theme = themes.natura.light,
    type,
  } = props;

  return {
    disabled,
    helpText,
    id,
    label,
    mask,
    placeholder,
    required,
    state,
    theme,
    type,
  };
};

describe("Field component", () => {
  it("should match snapshot", () => {
    const testRenderer : TestRenderer.ReactTestRenderer = TestRenderer.create(<Field id={"test-field"} />);

    expect(testRenderer).toMatchSnapshot();
  });

  it("should render single line input", () => {
    const props = getProps();
    const testRenderer = TestRenderer.create(<Field {...props} />);

    expect(testRenderer).toMatchSnapshot();
  });

  it("should render single line masked input", () => {
    const props = getProps({ mask: ["v"] });
    const testRenderer = TestRenderer.create(<Field {...props} />);

    expect(testRenderer).toMatchSnapshot();
  });

  it("should render input for password types", () => {
    const props = getProps({ type: "password", value: "new password" });
    const testRenderer = TestRenderer.create(<Field {...props} />);

    expect(testRenderer).toMatchSnapshot();
  });

  it("should render input for search type", () => {
    const props = getProps({ type: "search", value: "new search" });
    const testRenderer = TestRenderer.create(<Field {...props} />);

    expect(testRenderer).toMatchSnapshot();
  });

  it("should render input for search types and onChange", () => {
    const props = getProps({ type: "search" });
    const onChange = jest.fn();
    const value = "new search";
    const testRenderer = TestRenderer.create(<Field {...props} onChange={onChange} value={value} />);

    expect(testRenderer).toMatchSnapshot();
  });

  it.todo("should change input value");
  it.todo("should change input value and call the callback function");

});
