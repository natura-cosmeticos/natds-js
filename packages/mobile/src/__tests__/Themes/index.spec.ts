import { Platform } from "react-native";

const iOSTypography: any = {
  fontFamily: "System",
  fontFamilyBrand: "\"Helvetica Neue\"",
  fontWeightLight: 300,
  fontWeightRegular: 400,
  fontWeightMedium: 500,
  fontWeightBold: 700
};

const androidTypography: any = {
  fontFamily: "System",
  fontFamilyBrand: "\"Helvetica Neue\"",
  fontWeightLight: 300,
  fontWeightRegular: 400,
  fontWeightMedium: 500,
  fontWeightBold: 700
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
