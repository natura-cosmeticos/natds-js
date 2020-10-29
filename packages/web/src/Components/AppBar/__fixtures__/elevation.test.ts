import { elevation } from "./elevation";

describe("Elevation control config", () => {
  it("should match snapshot", () => {
    expect(elevation).toMatchSnapshot();
  });
});
