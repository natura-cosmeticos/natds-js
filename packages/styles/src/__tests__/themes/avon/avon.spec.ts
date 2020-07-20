import { themes } from "../../../index";

describe("Avon Theme", () => {
  const { avon: { dark, light } } = themes;

  test("it should match Avon Light theme snapshot", () => {
    expect(light).toMatchSnapshot("Avon Light Theme");
  });
  test("it should match Avon Dark theme snapshot", () => {
    expect(dark).toMatchSnapshot("Avon Dark Theme");
  });
});
