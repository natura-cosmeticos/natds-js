import { getTheme, themes } from '../index';

describe('getTheme function', () => {
  test('it should get the matching natura theme', () => {
    const expectedJson = require('./parsedNaturaTheme.json');
    const theme = getTheme(themes.natura);

    expect(theme).toStrictEqual(expectedJson);
  });
});
