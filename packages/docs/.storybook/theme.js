import { create } from '@storybook/theming/create';

export default create({
  base: 'light',

  appBg: '#333',
  appContentBg: '#fff',
  appBorderRadius: 0,

  colorPrimary: '#F4AB34',
  colorSecondary: '#F49B00',

  barTextColor: '#f0f0f0',
  barSelectedColor: '#F4AB34',
  barBg: '#333',

  textColor: '#333',
  textInverseColor: '#333',

  brandTitle: 'natds-js',
  brandUrl: 'https://natds-v0-1-0-alpha.netlify.com',
  brandImage: require('../src/assets/images/logo-natura.png'),
});
