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
});
