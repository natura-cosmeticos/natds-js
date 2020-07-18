import { naturaLight } from "./themes/natura/natura-light";
import { naturaDark } from "./themes/natura/natura-dark";
import { avonLight } from "./themes/avon/avon-light";
import { avonDark } from "./themes/avon/avon-dark";
import { theBodyShopLight } from "./themes/theBodyShop/the-body-shop-light";
import { theBodyShopDark } from "./themes/theBodyShop/the-body-shop-dark";
export { ITheme } from "./themes/ITheme";

export default {
  "avon": {
    "dark": avonDark,
    "light": avonLight
  },
  "natura": {
    "dark": naturaDark,
    "light": naturaLight
  },
  "theBodyShop": {
    "dark": theBodyShopDark,
    "light": theBodyShopLight
  }
};
