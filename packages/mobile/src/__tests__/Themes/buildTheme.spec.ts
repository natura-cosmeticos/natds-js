import { buildTheme } from '../../Themes/buildTheme';
import { themes, IThemeMobile } from '../../Themes';

describe('Function buildTheme', () => {
  test('it should return the parsed natura light theme', () => {
    const {
      natura: { light },
    } = themes;

    const theme = buildTheme(light, light);
    expect(theme).toMatchSnapshot('Natura Light Theme');
  });

  test('it should return the parsed natura light theme with missing values', () => {
    const {
      natura: { light },
    } = themes;

    const themeWithMissingValues: IThemeMobile = {
      ...light,
      shape: undefined,
      palette: undefined,
      typography: {
        fontFamily: undefined,
        fontFamilyBrand1: undefined,
        fontFamilyBrand2: undefined,
        fontFamilyBrand3: undefined,
        fontWeightLight: undefined,
        fontWeightRegular: undefined,
        fontWeightMedium: undefined,
        fontWeightBold: undefined,
      },
    };

    expect(buildTheme(themeWithMissingValues, light)).toMatchSnapshot('Natura Light Theme With Missing Values');
  });
});
