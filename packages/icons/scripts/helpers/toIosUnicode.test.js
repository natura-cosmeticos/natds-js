const toIosUnicode = require("./toIosUnicode");

describe("toIosUnicode function", () => {
  it("should convert correctly to iOS Unicode", () => {
    const actual = toIosUnicode("%u0000");

    expect(actual).toBe("\\u{0000}");
  });
});
