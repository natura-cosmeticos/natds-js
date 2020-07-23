import { themes } from "../../../index";

describe("Natura Dark Theme", () => {
  it("matches Natura Dark Theme snapshot", () => {
    const {
      natura: { dark },
    } = themes;

    expect(dark).toMatchSnapshot("Natura Dark Theme");
  });
});
