import { themes } from '../../../Themes';

describe('Themes', () => {
  test('It should match the natura light theme snapshot', () => {
    const naturaLight = require('./naturaLightThemeParsed.json');
    const {
      natura: { light },
    } = themes;

    /**
     * This is due to the json file limitation. It can't have a property with value undefined.
     */
    naturaLight.typography.fontFamilyBrand3 = undefined;

    expect(light).toStrictEqual(naturaLight);
  });

  test('it should match the natura dark theme snapshot', () => {
    const naturaDark = require('./naturaDarkThemeParsed.json');
    const {
      natura: { dark },
    } = themes;

    /**
     * This is due to the json file limitation. It can't have a property with value undefined.
     */
    naturaDark.typography.fontFamilyBrand3 = undefined;

    expect(dark).toStrictEqual(naturaDark);
  });
});
