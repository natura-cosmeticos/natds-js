import * as React from "react";
import * as TestRenderer from "react-test-renderer";
import { IconButton } from "./IconButton";

const MockedIcon = () => <i />;

describe("IconButton component", () => {
  describe("rendering sizes", () => {
    test("should match snapshot - Size Small", () => {
      const component = TestRenderer.create(<IconButton size="small"><MockedIcon /></IconButton>).toJSON();

      expect(component).toMatchSnapshot();
    });

    test("should match snapshot - Size Medium", () => {
      const component = TestRenderer.create(<IconButton size="medium"><MockedIcon /></IconButton>).toJSON();

      expect(component).toMatchSnapshot();
    });
  });

  describe("interaction", () => {

    /**
     * @todo Simulate click action
     */
    test("should call onClick", () => {
      const mockOnClick = jest.fn();
      const component = TestRenderer.create(<IconButton onClick={mockOnClick}><MockedIcon /></IconButton>);

      expect(component).toMatchSnapshot();
    });
  });
});
