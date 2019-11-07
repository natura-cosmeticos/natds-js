import { buildTheme } from '../../Themes/buildTheme';
import { themes, IThemeMobile } from '../../Themes';
// tslint:disable-next-line:no-var-requires
const parsedNaturaLightTheme = require('./parsedNaturaLightTheme.json');
// tslint:disable-next-line:no-var-requires
const parsedNaturaLightThemeWithoutValues = require('./parsedNaturaLightThemeWithoutValues.json');

describe('Function buildTheme', () => {
  test('it should return the parsed natura light theme', () => {
    const { natura: { light } } = themes;

    const theme = buildTheme(light, light);
    expect(theme).toStrictEqual(parsedNaturaLightTheme);
  });

  test('it should return the parsed natura light theme with missing values', () => {
    const { natura: { light } } = themes;

    const themeWithMissingValues:IThemeMobile = {
      ...light,
      shape: undefined,
      palette: undefined,
      typography: {
        fontFamily: undefined,
        fontFamilyBrand: undefined,
        fontWeightLight: undefined,
        fontWeightRegular: undefined,
        fontWeightMedium: undefined,
        fontWeightBold: undefined
      }
    };

    expect(buildTheme(themeWithMissingValues, light)).toStrictEqual(parsedNaturaLightThemeWithoutValues);
  });
});
