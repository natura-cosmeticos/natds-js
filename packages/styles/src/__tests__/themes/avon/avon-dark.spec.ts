import { themes } from "../../../index";

describe("Avon Dark Theme", () => {

  it("matches Avon Dark theme snapshot", () => {
    const { avon: { dark } } = themes;
    expect(dark).toMatchSnapshot("Avon Dark Theme");
  });

});

