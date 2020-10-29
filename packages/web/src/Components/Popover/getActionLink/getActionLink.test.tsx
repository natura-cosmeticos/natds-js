import * as TestRenderer from "react-test-renderer";
import getActionLink from "./getActionLink";

describe("Action link component", () => {
  describe("when no props are provided", () => {
    it("should match snapshot", () => {
      const testRenderer : TestRenderer.ReactTestRenderer = TestRenderer.create(getActionLink());

      expect(testRenderer).toMatchSnapshot();
    });
  });
  describe("when text property is provided", () => {
    it("should render correctly", () => {
      const testRenderer : TestRenderer.ReactTestRenderer = TestRenderer.create(getActionLink({
        text: "Test text",
      }));

      expect(testRenderer).toMatchSnapshot();
    });
  });
  describe("when both text and children properties are provided", () => {
    it("should render correctly", () => {
      const testRenderer : TestRenderer.ReactTestRenderer = TestRenderer.create(getActionLink({
        children: "Test children content",
        text: "Test text",
      }));

      expect(testRenderer).toMatchSnapshot();
    });
  });
});
