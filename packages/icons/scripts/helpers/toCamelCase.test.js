import toCamelCase from "./toCamelCase";

describe("toCamelCase function", () => {
  it("should convert to camelCase correctly", () => {
    const actual = toCamelCase("outlined-finance-bag");

    expect(actual).toBe("outlinedFinanceBag");
  });
});
