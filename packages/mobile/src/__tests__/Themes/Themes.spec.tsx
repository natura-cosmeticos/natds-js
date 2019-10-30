import { natura } from '../../Themes';
import naturaLightThemeSnapshot from './natura-theme-light.json';
import naturaDarkThemeSnapshot from './natura-theme-dark.json';

describe('Testing natura theme', () => {
  test('it should match the natura light theme snapshot', () => {
    expect(natura.light).toStrictEqual(naturaLightThemeSnapshot);
  });

  test('it should match the natura dark theme snapshot', () => {
    expect(natura.dark).toStrictEqual(naturaDarkThemeSnapshot);
  });
});
