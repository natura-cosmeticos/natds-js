import getUnicodeIconString from "./getUnicodeIconString";

describe("Unicode icon string getter", () => {
  it("should...", () => {
    const actual = getUnicodeIconString({
      "first-icon-name": "%uEA01",
      "second-icon-name": "%uEA02",
    });

    expect(actual).toBe("case .firstIconName: return \"\\u{EA01}\"\n"
      + "case .secondIconName: return \"\\u{EA02}\"\n");
  });
});
