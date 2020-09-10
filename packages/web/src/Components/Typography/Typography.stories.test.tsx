import * as React from "react";
import * as reactTestRenderer from "react-test-renderer";
import { Alignments, Playground, Variants } from "./Typography.stories";

describe("Typography stories", () => {
  describe("with default arguments", () => {
    it("renders correctly", () => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      const actual = reactTestRenderer.create(<Playground />);

      expect(actual).toMatchSnapshot();
    });
  });
  describe("with variants", () => {
    it("renders correctly", () => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      const actual = reactTestRenderer.create(<Variants />);

      expect(actual).toMatchSnapshot();
    });
  });

  describe("with alignments", () => {
    it("renders correctly", () => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      const actual = reactTestRenderer.create(<Alignments />);

      expect(actual).toMatchSnapshot();
    });
  });
});
