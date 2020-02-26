import { naturaLight } from './themes/natura/natura-light';
import { naturaDark } from './themes/natura/natura-dark';
import { avonLight } from './themes/avon/avon-light';
import { avonDark } from './themes/avon/avon-dark';
export { ITheme } from './themes/ITheme';

export default {
  natura: {
    light: naturaLight,
    dark: naturaDark
  },
  avon: {
    light: avonLight,
    dark: avonDark
  },
};
