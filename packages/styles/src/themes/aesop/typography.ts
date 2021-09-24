/* eslint-disable import/prefer-default-export */
import themes from '@naturacosmeticos/natds-themes'
import { ITypography } from 'tokens/typography/ITypography'

const { typography: typographyFromTheme } = themes.aesop.light

export const typography: ITypography = {
  body: {
    regular: {
      fontFamily: `"${typographyFromTheme.body.regular.fontFamily}", ${typographyFromTheme.fallback.fontFamily}`,
      fontWeight: typographyFromTheme.body.regular.fontWeight
    },
    bold: {
      fontFamily: `"${typographyFromTheme.body.bold.fontFamily}", ${typographyFromTheme.fallback.fontFamily}`,
      fontWeight: typographyFromTheme.body.bold.fontWeight
    }
  },
  display: {
    fontFamily: `"${typographyFromTheme.display.fontFamily}", ${typographyFromTheme.fallback.fontFamily}`,
    fontWeight: typographyFromTheme.display.fontWeight
  },
  headline: {
    fontFamily: `"${typographyFromTheme.headline.fontFamily}", ${typographyFromTheme.fallback.fontFamily}`,
    fontWeight: typographyFromTheme.headline.fontWeight
  },

  fontFamily: `"${typographyFromTheme.fontFamily.primary}", ${typographyFromTheme.fontFamily.secondary}`,
  /**
   * @deprecated `fontFamilyBrand1` deprecated since v4.2.2
   * Please, use `body` or `display` or `headline` instead
   */
  fontFamilyBrand1: `"${typographyFromTheme.fontFamily.branding} Display"`,
  /**
   * @deprecated `fontFamilyBrand2` deprecated since v4.2.2
   * Please, use `body` or `display` or `headline` instead
   */
  fontFamilyBrand2: `"${typographyFromTheme.fontFamily.branding} Text"`,
  /**
   * @deprecated `fontFamilyBrand3` deprecated since v4.2.2
   * Please, use `body` or `display` or `headline` instead
   */
  fontFamilyBrand3: null,
  /**
   * @deprecated `fontWeightLight` deprecated since v4.2.2
   * Please, use `body` or `display` or `headline` instead
   */
  fontWeightLight: 300,

  fontWeightRegular: typographyFromTheme.fontWeight.regular,
  /**
   * @deprecated `fontWeightMedium` deprecated since v4.2.2
   * Please, use `body` or `display` or `headline` instead
   */
  fontWeightMedium: typographyFromTheme.fontWeight.medium,
  /**
   * @deprecated `fontWeightBold` deprecated since v4.2.2
   * Please, use `body` or `display` or `headline` instead
   */
  fontWeightBold: 700
}
