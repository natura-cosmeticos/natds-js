import { themes } from '../index';

describe('getTheme function', () => {
  test('it should get the matching natds theme', () => {
    const expectedJson = require('./parsedNatDSTheme.json');
    const { natds } = themes;

    expect(natds).toStrictEqual(expectedJson);
  });
});
