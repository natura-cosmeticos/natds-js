import { natura } from '../../Themes';
import naturaThemeSnapshot from './natura-theme.json';

describe('Testing natura theme', () => {
  test('it should match the natura theme snapshot', () => {
    expect(natura).toStrictEqual(naturaThemeSnapshot);
  });
});
