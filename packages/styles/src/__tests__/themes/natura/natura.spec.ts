import { themes } from "../../../index";

describe("Natura Theme", () => {
  test("it should match Natura Dark theme snapshot", () => {
      const {
      natura: { light }
    } = themes;

    expect(light).toMatchSnapshot('Natura Light Theme');
  });
  test("it should match Natura Dark theme snapshot", () => {
    const {
      natura: { dark }
    } = themes;

    expect(dark).toMatchSnapshot('Natura Dark Theme');
  });
});
