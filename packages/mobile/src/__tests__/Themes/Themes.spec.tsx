import { natds } from '../../Themes';
import natdsThemeSnapshot from './natds-theme.json';

describe('Testing natura theme', () => {
  test('it should match the natura theme snapshot', () => {
    expect(natds).toStrictEqual(natdsThemeSnapshot);
  });
});
