import { naturaLight } from './themes/natura/natura-light'
import { naturaDark } from './themes/natura/natura-dark'
import { naturaV3Light } from './themes/natura_v3/natura_v3-light'
import { naturaV3Dark } from './themes/natura_v3/natura_v3-dark'
import { avonLight } from './themes/avon/avon-light'
import { avonDark } from './themes/avon/avon-dark'
import { avonV2Light } from './themes/avon_v2/avon_v2-light'
import { avonV2Dark } from './themes/avon_v2/avon_v2-dark'
import { avonV3Light } from './themes/avon_v3/avon_v3-light'
import { avonV3Dark } from './themes/avon_v3/avon_v3-dark'
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
  avon_v2: {
    dark: avonV2Dark,
    light: avonV2Light
  },
  avon_v3: {
    dark: avonV3Dark,
    light: avonV3Light
  },
  natura: {
    dark: naturaDark,
    light: naturaLight
  },
  natura_v3: {
    dark: naturaV3Dark,
    light: naturaV3Light
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
