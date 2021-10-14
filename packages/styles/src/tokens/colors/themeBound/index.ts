/* eslint-disable import/prefer-default-export */
import { naturaDarkColorTokens, naturaLightColorTokens } from './natura'
import { avonDarkColorTokens, avonLightColorTokens } from './avon'
import { theBodyShopDarkColorTokens, theBodyShopLightColorTokens } from './theBodyShop'
import { aesopDarkColorTokens, aesopLightColorTokens } from './aesop'
import { biomeDarkColorTokens, biomeLightColorTokens } from './biome'

/**
 * @deprecated theme-bound `colorTokens` are deprecated since v0.20 and will be removed at v1.0.
 * Please use `theme.${brand}.${mode}.color` from `natds-themes`.
 */
export const colorTokens = {

  /**
   * @deprecated `avonDarkColorTokens` are deprecated since v0.20 and will be removed at v1.0.
   * Please use `theme.avon.dark.color` from `natds-themes`.
   */
  avonDarkColorTokens,

  /**
   * @deprecated `avonLightColorTokens` are deprecated since v0.20 and will be removed at v1.0.
   * Please use `theme.avon.light.color` from `natds-themes`.
   */
  avonLightColorTokens,

  /**
   * @deprecated `naturaDarkColorTokens` are deprecated since v0.20 and will be removed at v1.0.
   * Please use `theme.natura.dark.color` from `natds-themes`.
   */
  naturaDarkColorTokens,

  /**
   * @deprecated `naturaLightColorTokens` are deprecated since v0.20 and will be removed at v1.0.
   * Please use `theme.natura.light.color` from `natds-themes`.
   */
  naturaLightColorTokens,

  /**
   * @deprecated `theBodyShopDarkColorTokens` are deprecated since v0.20 and will be removed at v1.0.
   * Please use `theme.theBodyShop.dark.color` from `natds-themes`.
   */
  theBodyShopDarkColorTokens,

  /**
   * @deprecated `theBodyShopLightColorTokens` are deprecated since v0.20 and will be removed at v1.0.
   * Please use `theme.theBodyShop.light.colors` from `natds-themes`.
   */
  theBodyShopLightColorTokens,

  /**
   * @deprecated `aesopDarkColorTokens` are deprecated since v0.20 and will be removed at v1.0.
   * Please use `theme.aesop.dark.color` from `natds-themes`.
   */
  aesopDarkColorTokens,

  /**
   * @deprecated `aesopLightColorTokens` are deprecated since v0.20 and will be removed at v1.0.
   * Please use `theme.aesop.light.colors` from `natds-themes`.
   */
  aesopLightColorTokens,

  /**
   * @deprecated `aesopDarkColorTokens` are deprecated since v0.20 and will be removed at v1.0.
   * Please use `theme.aesop.dark.color` from `natds-themes`.
   */
  biomeDarkColorTokens,

  /**
   * @deprecated `biomeLightColorTokens` are deprecated since v0.20 and will be removed at v1.0.
   * Please use `theme.biome.light.colors` from `natds-themes`.
   */
  biomeLightColorTokens
}
