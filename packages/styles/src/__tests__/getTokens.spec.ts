import { getTokens, themes } from '../index';

describe('getTokens function', () => {
  test('it should match the expected natura theme json', () => {
    const expectedJson = require('./parsedNaturaTokens.json');

    const tokens = getTokens(themes.natura);
    expect(tokens).toStrictEqual(expectedJson);
  });

  test('it should throw error when file was not found', () => {
    try {
      getTokens('');
    } catch (error) {
      expect(error.message).toBe('Theme not found');
    }
  });
});
