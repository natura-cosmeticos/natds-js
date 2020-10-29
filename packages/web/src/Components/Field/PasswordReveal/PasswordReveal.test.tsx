import * as React from "react";
import * as TestRenderer from "react-test-renderer";
import { IPasswordRevealProps } from "./PasswordReveal.props";
import PasswordReveal from "./PasswordReveal";

const getProps = (props: Partial<IPasswordRevealProps> = {}) => {
  const {
    hidePasswordIcon = () => <i className="hide" />,
    onTogglePasswordReveal = jest.fn(),
    showing = false,
    showPasswordIcon = () => <i className="show" />,
  } = props;

  return {
    hidePasswordIcon,
    onTogglePasswordReveal,
    showPasswordIcon,
    showing,
  };
};

describe("TextField PasswordReveal component", () => {

  describe("when showing property is false", () => {
    it("should match snapshot", () => {
      const testRenderer : TestRenderer.ReactTestRenderer = TestRenderer.create(
        <PasswordReveal
          onTogglePasswordReveal={() => Function.prototype()}
          showing={false}
        />,
      );

      expect(testRenderer).toMatchSnapshot();
    });
  });

  describe("when showing property is true", () => {
    it("should match snapshot", () => {
      const testRenderer : TestRenderer.ReactTestRenderer = TestRenderer.create(
        <PasswordReveal
          onTogglePasswordReveal={() => Function.prototype()}
          showing={true}
        />,
      );

      expect(testRenderer).toMatchSnapshot();
    });
  });

  describe("when hidePasswordIcon property is set", () => {
    it("should match snapshot", () => {
      const testRenderer : TestRenderer.ReactTestRenderer = TestRenderer.create(
        <PasswordReveal
          hidePasswordIcon={"div"}
          onTogglePasswordReveal={() => Function.prototype()}
          showing={false}
        />,
      );

      expect(testRenderer).toMatchSnapshot();
    });
  });

  describe("when showPasswordIcon property is set", () => {
    it("should match snapshot", () => {
      const testRenderer : TestRenderer.ReactTestRenderer = TestRenderer.create(
        <PasswordReveal
          onTogglePasswordReveal={() => Function.prototype()}
          showing={false}
          showPasswordIcon={"div"}
        />,
      );

      expect(testRenderer).toMatchSnapshot();
    });
  });

  it("should render received showPasswordIcon", () => {
    const props = getProps({ showing: false });
    const testRenderer = TestRenderer.create(<PasswordReveal {...props} />);

    expect(testRenderer).toMatchSnapshot();
  });

  it("should render received hidePasswordIcon", () => {
    const props = getProps({ showing: true });
    const testRenderer = TestRenderer.create(<PasswordReveal {...props} />);

    expect(testRenderer).toMatchSnapshot();
  });

  /**
   * @todo rewrite test to support null type assignment
   */
  it("should render default showPasswordIcon", () => {
    const props = getProps({ showing: false });
    // eslint-disable-next-line no-undefined
    const testRenderer = TestRenderer.create(<PasswordReveal {...props} showPasswordIcon={undefined} hidePasswordIcon={undefined} />);

    expect(testRenderer).toMatchSnapshot();
  });

  /**
   * @todo rewrite test to support null type assignment
   */
  test("should render default hidePasswordIcon", () => {
    const props = getProps({ showing: true });
    // eslint-disable-next-line no-undefined
    const testRenderer = TestRenderer.create(<PasswordReveal {...props} showPasswordIcon={undefined} hidePasswordIcon={undefined} />);

    expect(testRenderer).toMatchSnapshot();
  });

  it.todo("should call onTogglePasswordReveal callback after click");
});
