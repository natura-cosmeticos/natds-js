import { create } from '@storybook/theming/create';
// import brandImage from "../src/assets/images/logo-natura.png"

// import "../src/assets/images/favicon.png";

export default create({
  base: 'light',

  appBg: '#333',
  appContentBg: '#fff',
  appBorderRadius: 0,

  colorPrimary: '#F49B00',
  colorSecondary: '#EF8426',

  barTextColor: '#f0f0f0',
  barSelectedColor: '#F49B00',
  barBg: '#333',

  textColor: '#333',
  textInverseColor: '#fff',

  brandTitle: 'natds-js',
  brandUrl: '/',
  // brandImage,
});
