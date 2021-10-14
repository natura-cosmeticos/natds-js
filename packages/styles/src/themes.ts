import { naturaLight } from './themes/natura/natura-light'
import { naturaDark } from './themes/natura/natura-dark'
import { avonLight } from './themes/avon/avon-light'
import { avonDark } from './themes/avon/avon-dark'
import { theBodyShopLight } from './themes/theBodyShop/the-body-shop-light'
import { theBodyShopDark } from './themes/theBodyShop/the-body-shop-dark'
import { aesopLight } from './themes/aesop/aesop-light'
import { aesopDark } from './themes/aesop/aesop-dark'
import { biomeLight } from './themes/biome/biome-light'
import { biomeDark } from './themes/biome/biome-dark'

export { ITheme } from './themes/ITheme'

export default {
  avon: {
    dark: avonDark,
    light: avonLight
  },
  natura: {
    dark: naturaDark,
    light: naturaLight
  },
  theBodyShop: {
    dark: theBodyShopDark,
    light: theBodyShopLight
  },
  aesop: {
    dark: aesopDark,
    light: aesopLight
  },
  biome: {
    dark: biomeDark,
    light: biomeLight
  }
}
