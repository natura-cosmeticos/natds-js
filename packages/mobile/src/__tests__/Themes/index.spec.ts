import { Platform } from "react-native";

const iOSTypography: any = {
  fontFamily: "System",
  fontFamilyBrand: "\"Helvetica Neue\"",
  fontWeightLight: 300,
  fontWeightRegular: 400,
  fontWeightMedium: 500,
  fontWeightBold: 700,
  h1: {
    fontSize: "96px",
    lineHeight: 1
  },
  h2: {
    fontSize: "60px",
    lineHeight: 1
  },
  h3: {
    fontSize: "48px",
    lineHeight: 1
  },
  h4: {
    fontSize: "34px",
    lineHeight: 1
  },
  h5: {
    fontSize: "24px",
    lineHeight: 1
  },
  h6: {
    fontSize: "20px",
    lineHeight: 1
  },
  subtitle1: {
    fontSize: "16px",
    lineHeight: 1
  },
  subtitle2: {
    fontSize: "14px",
    lineHeight: 1
  },
  body1: {
    fontSize: "16px",
    lineHeight: 1
  },
  body2: {
    fontSize: "14px",
    lineHeight: 1
  },
  button: {
    fontSize: "14px",
    lineHeight: 1
  },
  caption: {
    fontSize: "12px",
    lineHeight: 1
  },
  overline: {
    fontSize: "12px",
    lineHeight: 1
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
    fontSize: "96px",
    lineHeight: 1
  },
  h2: {
    fontSize: "60px",
    lineHeight: 1
  },
  h3: {
    fontSize: "48px",
    lineHeight: 1
  },
  h4: {
    fontSize: "34px",
    lineHeight: 1
  },
  h5: {
    fontSize: "24px",
    lineHeight: 1
  },
  h6: {
    fontSize: "20px",
    lineHeight: 1
  },
  subtitle1: {
    fontSize: "16px",
    lineHeight: 1
  },
  subtitle2: {
    fontSize: "14px",
    lineHeight: 1
  },
  body1: {
    fontSize: "16px",
    lineHeight: 1
  },
  body2: {
    fontSize: "14px",
    lineHeight: 1
  },
  button: {
    fontSize: "14px",
    lineHeight: 1
  },
  caption: {
    fontSize: "12px",
    lineHeight: 1
  },
  overline: {
    fontSize: "12px",
    lineHeight: 1
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
