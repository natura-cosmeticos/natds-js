import { variants } from "./variants";

describe("Avatar deprecated variants", () => {
  it("should match snapshot", () => {
    expect(variants).toMatchSnapshot();
  });
});
