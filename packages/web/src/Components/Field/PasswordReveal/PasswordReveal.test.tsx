import * as React from "react";
import * as TestRenderer from "react-test-renderer";
import PasswordReveal from "./PasswordReveal";
import { Icon } from "../../Icon";

describe("PasswordReveal component", () => {

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

});
