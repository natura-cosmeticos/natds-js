// eslint-disable-next-line @typescript-eslint/no-var-requires
const uniqueArray = require("./uniqueArray");

describe("uniqueArray function", () => {
  it("should unique an array correctly", () => {
    const actual = [
      "v0.13.9",
      "v0.13.9",
      "v0.13.8",
      "v0.13.8",
      "v0.13.8",
      "v0.13.8",
      "v0.13.8",
      "v0.13.8",
      "v0.13.7",
      "v0.13.7",
      "v0.13.7",
      "v0.13.7",
      "v0.13.6",
      "v0.13.4",
      "v0.13.4",
      "v0.13.4",
      "v0.13.4",
      "v0.13.4",
      "v0.13.4",
      "v0.13.4",
      "v0.13.4",
      "v0.13.4",
      "v0.13.4",
      "v0.13.3",
      "v0.13.3",
      "v0.13.3",
      "v0.13.2",
      "v0.13.1",
      "v0.13.0",
      "v0.13.0",
    ];
    const expected = ["v0.13.9",
      "v0.13.8",
      "v0.13.7",
      "v0.13.6",
      "v0.13.4",
      "v0.13.3",
      "v0.13.2",
      "v0.13.1",
      "v0.13.0"];

    expect(uniqueArray(actual)).toStrictEqual(expected);
  });
});
