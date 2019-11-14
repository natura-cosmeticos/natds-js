import { Platform } from 'react-native';

const iOSTypography: any = {
  fontFamily: 'System',
  fontFamilyBrand1: '"Helvetica Now Display"',
  fontFamilyBrand2: '"Helvetica Now Text"',
  fontFamilyBrand3: undefined,
  fontWeightLight: 300,
  fontWeightRegular: 400,
  fontWeightMedium: 500,
  fontWeightBold: 700,
  h1: {
    fontSize: '6rem',
  },
  h2: {
    fontSize: '3.75rem',
  },
  h3: {
    fontSize: '3rem',
  },
  h4: {
    fontSize: '2.125rem',
  },
  h5: {
    fontSize: '1.5rem',
  },
  h6: {
    fontSize: '1.25rem',
  },
  subtitle1: {
    fontSize: '1rem',
  },
  subtitle2: {
    fontSize: '0.875rem',
  },
  body1: {
    fontSize: '1rem',
  },
  body2: {
    fontSize: '0.875rem',
  },
  button: {
    fontSize: '0.875rem',
  },
  caption: {
    fontSize: '0.75rem',
  },
  overline: {
    fontSize: '0.75rem',
  },
};

const androidTypography: any = {
  fontFamily: 'System',
  fontFamilyBrand1: '"Helvetica Now Display"',
  fontFamilyBrand2: '"Helvetica Now Text"',
  fontFamilyBrand3: undefined,
  fontWeightLight: 300,
  fontWeightRegular: 400,
  fontWeightMedium: 500,
  fontWeightBold: 700,
  h1: {
    fontSize: '6rem',
  },
  h2: {
    fontSize: '3.75rem',
  },
  h3: {
    fontSize: '3rem',
  },
  h4: {
    fontSize: '2.125rem',
  },
  h5: {
    fontSize: '1.5rem',
  },
  h6: {
    fontSize: '1.25rem',
  },
  subtitle1: {
    fontSize: '1rem',
  },
  subtitle2: {
    fontSize: '0.875rem',
  },
  body1: {
    fontSize: '1rem',
  },
  body2: {
    fontSize: '0.875rem',
  },
  button: {
    fontSize: '0.875rem',
  },
  caption: {
    fontSize: '0.75rem',
  },
  overline: {
    fontSize: '0.75rem',
  },
};

describe('Importing themes', () => {
  test('Testing android import', () => {
    Platform.OS = 'android';
    const {
      themes: {
        natura: {
          light: { typography },
        },
      },
    } = require('../../Themes/index');
    expect(typography).toStrictEqual(androidTypography);
  });

  test('Testing iOS import', () => {
    Platform.OS = 'ios';
    const {
      themes: {
        natura: {
          light: { typography },
        },
      },
    } = require('../../Themes/index');

    expect(typography).toStrictEqual(iOSTypography);
  });
});
