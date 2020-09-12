/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable sort-keys */
import themes from "@naturacosmeticos/natds-themes";

const { typography: typographyFromTheme } = themes.avon.light;

/**
 * @deprecated `typography` token without a mode is deprecated since v0.20 and will be removed at v1.0.
 * Please use `themes.avon.${mode}.typography` from `natds-themes, where `mode` can be `dark` or `light`.
 */
export const typography: any = {
  fontFamily: `"${typographyFromTheme.fontFamily.primary}", ${typographyFromTheme.fontFamily.secondary}`,

  /**
   * @todo check the difference between "Helvetica Now" and "Helvetica Now Display" with UI Designers
   */
  fontFamilyBrand1: `"${typographyFromTheme.fontFamily.branding} Display"`,

  /**
   * @todo check the difference between "Helvetica Now" and "Helvetica Now Display" with UI Designers
   */
  fontFamilyBrand2: `"${typographyFromTheme.fontFamily.branding} Text"`,
  fontFamilyBrand3: null,

  /**
   * @deprecated `fontWeightLight` is deprecated since v0.20 and will be removed at v1.0.
   * Please use `typography.fontWeight.regular` theme token from `natds-themes`.
   */
  fontWeightLight: 300,
  fontWeightRegular: typographyFromTheme.fontWeight.regular,
  fontWeightMedium: typographyFromTheme.fontWeight.medium,

  /**
   * @deprecated `fontWeightBold` is deprecated since v0.20 and will be removed at v1.0.
   * Please use `typography.fontWeight.medium` theme token from `natds-themes`.
   */
  fontWeightBold: 700,
};
