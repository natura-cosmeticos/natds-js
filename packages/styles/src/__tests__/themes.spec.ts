import { themes } from '../index';

describe('getTheme function', () => {
  test('it should get the matching naturaLight theme', () => {
    const expectedJson = require('./parsedNaturaTheme.json');
    const { naturaLight } = themes;

    expect(naturaLight).toStrictEqual(expectedJson);
  });
});
