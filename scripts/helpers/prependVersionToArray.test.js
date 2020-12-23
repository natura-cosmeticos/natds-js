// eslint-disable-next-line @typescript-eslint/no-var-requires
const prependVersionToArray = require("./prependVersionToArray");

describe("prependVersionToArray", () => {
  it("should prepend version correctly", () => {
    const actual = prependVersionToArray("v0.13.10", ["v0.13.9", "v0.13.8"]);
    const expected = ["v0.13.10",
      "v0.13.9",
      "v0.13.8"];

    expect(actual).toStrictEqual(expected);
  });
});
