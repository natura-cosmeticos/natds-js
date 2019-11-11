import { Platform } from "react-native";

const iOSTypography: any = {
  fontFamily: "System",
  fontFamilyBrand: "\"Helvetica Neue\"",
  fontWeightLight: 300,
  fontWeightRegular: 400,
  fontWeightMedium: 500,
  fontWeightBold: 700,
  h1: {
    fontSize: "96px"
  },
  h2: {
    fontSize: "60px"
  },
  h3: {
    fontSize: "48px"
  },
  h4: {
    fontSize: "34px"
  },
  h5: {
    fontSize: "24px"
  },
  h6: {
    fontSize: "20px"
  },
  subtitle1: {
    fontSize: "16px"
  },
  subtitle2: {
    fontSize: "14px"
  },
  body1: {
    fontSize: "16px"
  },
  body2: {
    fontSize: "14px"
  },
  button: {
    fontSize: "14px"
  },
  caption: {
    fontSize: "12px"
  },
  overline: {
    fontSize: "12px"
  }
};

const androidTypography: any = {
  fontFamily: "System",
  fontFamilyBrand: "\"Helvetica Neue\"",
  fontWeightLight: 300,
  fontWeightRegular: 400,
  fontWeightMedium: 500,
  fontWeightBold: 700,
  h1: {
    fontSize: "96px"
  },
  h2: {
    fontSize: "60px"
  },
  h3: {
    fontSize: "48px"
  },
  h4: {
    fontSize: "34px"
  },
  h5: {
    fontSize: "24px"
  },
  h6: {
    fontSize: "20px"
  },
  subtitle1: {
    fontSize: "16px"
  },
  subtitle2: {
    fontSize: "14px"
  },
  body1: {
    fontSize: "16px"
  },
  body2: {
    fontSize: "14px"
  },
  button: {
    fontSize: "14px"
  },
  caption: {
    fontSize: "12px"
  },
  overline: {
    fontSize: "12px"
  }
};

describe('Importing themes', () => {
  test('Testing android import', () => {
    Platform.OS = 'android';
    const { themes: { natura: { light: { typography } } } } = require('../../Themes/index');

    expect(typography).toStrictEqual(androidTypography);
  });

  test('Testing iOS import', () => {
    Platform.OS = 'ios';
    const { themes: { natura: { light: { typography } } } } = require('../../Themes/index');

    expect(typography).toStrictEqual(iOSTypography);
  });
});
