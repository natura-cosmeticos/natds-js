import { create } from '@storybook/theming/create';

export default create({
  base: 'light',

  appBg: '#333',
  appContentBg: '#fff',
  appBorderRadius: 0,

  colorPrimary: '#F49B00',
  colorSecondary: 'rgba(255, 107, 11, 0.16)',

  barTextColor: '#f0f0f0',
  barSelectedColor: '#F49B00',
  barBg: '#333',

  textColor: '#333',
  textInverseColor: '#fff',

  brandTitle: 'natds-js',
  brandUrl: 'https://natds-v0-1-0-alpha.netlify.com',
  brandImage: require('../src/assets/images/logo-natura.png'),
});
