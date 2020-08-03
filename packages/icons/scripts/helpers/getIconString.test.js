import getIconString from "./getIconString";

describe("Icon string getter", () => {
  it("should...", () => {
    const actual = getIconString({
      "first-icon-name": "%uEA01",
      "second-icon-name": "%uEA02",
    });

    expect(actual).toBe("case firstIconName = \"first-icon-name\"\n"
      + "case secondIconName = \"second-icon-name\"\n");
  });
});
