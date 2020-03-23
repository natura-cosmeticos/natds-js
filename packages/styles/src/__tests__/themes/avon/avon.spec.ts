import { themes } from "../../../index";

describe("Avon Theme", () => {
  test("it should match Avon Dark theme snapshot", () => {
      const {
      avon: { light }
    } = themes;

    expect(light).toMatchSnapshot("Avon Light Theme");
  });
  test("it should match Avon Dark theme snapshot", () => {
    const {
      avon: { dark }
    } = themes;

    expect(dark).toMatchSnapshot("Avon Dark Theme");
  });
});
