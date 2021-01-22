import * as useTheme from "@material-ui/core/styles/useTheme";
import useDefaultTheme from "./index";

jest.mock("@material-ui/core/styles/useTheme", () => ({
  default: jest.fn(),
  __esModule: true,
}));

describe("Default theme", () => {
  it("should call useTheme", () => {
    const useThemeSpy = jest.spyOn(useTheme, "default");

    useDefaultTheme();
    expect(useThemeSpy).toHaveBeenCalled();
  });
});
