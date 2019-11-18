import { themes } from "../../../index";

describe("Natura Theme", () => {
  test("it should get the matching Natura Light theme", () => {
    const expectedJson = require("./parsedNaturaLightTheme.json");
    /**
     * This is due to a json file limitation. You can't define a property as 'undefined'.
     */
    expectedJson.typography.iOS.fontFamilyBrand3 = undefined;
    expectedJson.typography.android.fontFamilyBrand3 = undefined;
    expectedJson.typography.web.fontFamilyBrand3 = undefined;

    const {
      natura: { light }
    } = themes;

    expect(light).toEqual(expectedJson);
  });
  test("it should get the matching Natura Dark theme", () => {
    const expectedJson = require("./parsedNaturaDarkTheme.json");
    /**
     * This is due to a json file limitation. You can't define a property as 'undefined'.
     */
    expectedJson.typography.iOS.fontFamilyBrand3 = undefined;
    expectedJson.typography.android.fontFamilyBrand3 = undefined;
    expectedJson.typography.web.fontFamilyBrand3 = undefined;

    const {
      natura: { dark }
    } = themes;

    expect(dark).toEqual(expectedJson);
  });
});
