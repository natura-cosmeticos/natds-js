import * as React from "react";
import * as TestRenderer from "react-test-renderer";
import { Icon as MockedIcon } from "../Icon/__mocks__/Icon";
import { ToggleButton } from "./ToggleButton";

describe("ToggleButton component", () => {
  describe("rendering sizes", () => {
    test("should match snapshot - Size Small", () => {
      const testRenderer = TestRenderer.create(<ToggleButton size="small" iconOn={<MockedIcon />} iconOff={<MockedIcon />} />);

      expect(testRenderer).toMatchSnapshot("ToggleButton Size Small snapshot");
    });

    test("should match snapshot - Size Medium", () => {
      const testRenderer = TestRenderer.create(<ToggleButton size="medium" iconOn={<MockedIcon />} iconOff={<MockedIcon />} />);

      expect(testRenderer).toMatchSnapshot("ToggleButton Size Medium snapshot");
    });
  });

  describe("rendering colors", () => {
    test("should match snapshot - Color Primary", () => {
      const testRenderer = TestRenderer.create(<ToggleButton color="primary" iconOn={<MockedIcon />} iconOff={<MockedIcon />} />);

      expect(testRenderer).toMatchSnapshot("ToggleButton Color Primary snapshot");
    });

    test("should match snapshot - Color Secondary", () => {
      const testRenderer = TestRenderer.create(<ToggleButton color="secondary" iconOn={<MockedIcon />} iconOff={<MockedIcon />} />);

      expect(testRenderer).toMatchSnapshot("ToggleButton Color Secondary snapshot");
    });

    test("should match snapshot - Color Default", () => {
      const testRenderer = TestRenderer.create(<ToggleButton color="secondary" iconOn={<MockedIcon />} iconOff={<MockedIcon />} />);

      expect(testRenderer).toMatchSnapshot("ToggleButton Color Default snapshot");
    });
  });

  describe("rendering attributes", () => {
    test("should match snapshot - Disabled", () => {
      const testRenderer = TestRenderer.create(<ToggleButton color="primary" iconOn={<MockedIcon />} iconOff={<MockedIcon />} disabled />);

      expect(testRenderer).toMatchSnapshot("ToggleButton Disabled snapshot");
    });
  });

  describe("interaction", () => {
    test("should render with onClick callback", () => {
      const mockOnClick = jest.fn();
      const testRenderer = TestRenderer.create(<ToggleButton iconOff={<MockedIcon />} iconOn={<MockedIcon />} onClick={mockOnClick} />);

      expect(testRenderer).toMatchSnapshot();
    });

    test("should render when start checked", () => {
      const testRenderer = TestRenderer.create(<ToggleButton iconOn={<MockedIcon className="on" />} iconOff={<MockedIcon className="off" />} checked={true} />);

      expect(testRenderer).toMatchSnapshot();
    });

    test("should render with the default state icon accordingly", () => {
      const testRenderer = TestRenderer.create(<ToggleButton iconOn={<MockedIcon className="on" />} iconOff={<MockedIcon className="off" />} />);

      expect(testRenderer).toMatchSnapshot();
    });
  });
});
