import { themes } from "../../../index";

describe("The Body Shop Theme", () => {
  test("it should match The Body Shop Light theme snapshot", () => {
    const {
      theBodyShop: { light },
    } = themes;

    expect(light).toMatchSnapshot("The Body Shop Light Theme");
  });
  test("it should match The Body Shop Dark theme snapshot", () => {
    const {
      theBodyShop: { dark },
    } = themes;

    expect(dark).toMatchSnapshot("The Body Shop Dark Theme");
  });
});
