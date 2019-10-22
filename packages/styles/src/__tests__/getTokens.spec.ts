import { getTokens, themes } from '../index';

describe('getTokens function', () => {
  test('it should match the expected natura theme json', () => {
    const expectedJson = require('./parsedNaturaTheme.json');

    const tokens = getTokens(themes.natura);
    expect(tokens).toEqual(expectedJson);
  });

  test('it should throw error when file was not found', () => {
    try {
      getTokens('');
    } catch (error) {
      expect(error.message).toBe('File not found');
    }
  });
});
