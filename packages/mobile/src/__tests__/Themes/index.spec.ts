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
    fontWeight: 300
  },
  h2: {
    fontSize: '3.75rem',
    fontWeight: 300
  },
  h3: {
    fontSize: '3rem',
    fontWeight: 400
  },
  h4: {
    fontSize: '2.125rem',
    fontWeight: 400
  },
  h5: {
    fontSize: '1.5rem',
    fontWeight: 400
  },
  h6: {
    fontSize: '1.25rem',
    fontWeight: 600
  },
  subtitle1: {
    fontSize: '1rem',
    fontWeight: 400
  },
  subtitle2: {
    fontSize: '0.875rem',
    fontWeight: 500
  },
  body1: {
    fontSize: '1rem',
    fontWeight: 400
  },
  body2: {
    fontSize: '0.875rem',
    fontWeight: 400
  },
  button: {
    fontSize: '0.875rem',
    fontWeight: 600
  },
  caption: {
    fontSize: '0.75rem',
    fontWeight: 400
  },
  overline: {
    fontSize: '0.75rem',
    fontWeight: 400
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
    fontWeight: 300
  },
  h2: {
    fontSize: '3.75rem',
    fontWeight: 300
  },
  h3: {
    fontSize: '3rem',
    fontWeight: 400
  },
  h4: {
    fontSize: '2.125rem',
    fontWeight: 400
  },
  h5: {
    fontSize: '1.5rem',
    fontWeight: 400
  },
  h6: {
    fontSize: '1.25rem',
    fontWeight: 600
  },
  subtitle1: {
    fontSize: '1rem',
    fontWeight: 400
  },
  subtitle2: {
    fontSize: '0.875rem',
    fontWeight: 500
  },
  body1: {
    fontSize: '1rem',
    fontWeight: 400
  },
  body2: {
    fontSize: '0.875rem',
    fontWeight: 400
  },
  button: {
    fontSize: '0.875rem',
    fontWeight: 600
  },
  caption: {
    fontSize: '0.75rem',
    fontWeight: 400
  },
  overline: {
    fontSize: '0.75rem',
    fontWeight: 400
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
