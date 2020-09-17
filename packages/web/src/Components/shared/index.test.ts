import * as sharedModule from "./index";

describe("shared module", () => {
  it("should export getDefaultTheme", () => {
    expect(sharedModule.getDefaultTheme).toBeDefined();
  });
  it("should export getSizeFromProp", () => {
    expect(sharedModule.getSizeFromProp).toBeDefined();
  });
  it("should export sizePropArgType", () => {
    expect(sharedModule.sizePropArgType).toBeDefined();
  });
  it("should export spacingPropArgType", () => {
    expect(sharedModule.spacingPropArgType).toBeDefined();
  });
});
