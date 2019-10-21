import { natura } from '../../Themes';
// tslint:disable-next-line: no-var-requires
const naturaThemeSnapshot = require('./natura-theme.json');

describe('Testing natura theme', () => {
  test('it should match the natura theme snapshot', () => {
    expect(natura).toStrictEqual(naturaThemeSnapshot);
  });
});
