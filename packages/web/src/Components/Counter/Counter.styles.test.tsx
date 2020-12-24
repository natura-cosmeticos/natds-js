import { ICounterProps } from "./Counter.props";
import { getButtonheight, getInputHeight } from "./Counter.styles";

const baseProps = {
  initialValue: 1,
  onChange: jest.fn(),
  onDecrement: jest.fn(),
  onIncrement: jest.fn(),
};

describe("Counter styles", () => {
  describe("getButtonheight", () => {
    it("should have differente values between small and medium", () => {
      const small: ICounterProps = {
        ...baseProps,
        size: "small",
      };

      const medium: ICounterProps = {
        ...baseProps,
        size: "medium",
      };

      const valueSmall = getButtonheight(small);
      const valueMedium = getButtonheight(medium);

      expect(valueSmall !== valueMedium).toBe(true);
    });
  });

  describe("getInputHeight", () => {
    it("should have differente values between small and medium", () => {
      const small: ICounterProps = {
        ...baseProps,
        size: "small",
      };

      const medium: ICounterProps = {
        ...baseProps,
        size: "medium",
      };

      const smallHeight = getInputHeight(small);
      const mediumHeight = getInputHeight(medium);

      expect(smallHeight !== mediumHeight).toBe(true);
    });

    it("should have different values from button", () => {
      const small: ICounterProps = {
        ...baseProps,
        size: "small",
      };

      const buttonHeight = getButtonheight(small);
      const inputHeight = getInputHeight(small);

      expect(buttonHeight !== inputHeight).toBe(true);
    });
  });
});
