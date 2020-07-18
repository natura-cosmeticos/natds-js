import { themes } from "../../../Themes";

describe("Themes", () => {
  test("It should match the natura light theme snapshot", () => {
    const {
      "natura": { light }
    } = themes;

    expect(light).toMatchSnapshot("Natura Light Theme Snapshot");
  });
});
