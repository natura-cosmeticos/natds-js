import { tokens } from '../index';

describe('getTokens function', () => {
  test('it should match the expected natura tokens json', () => {
    const expectedJson = require('./parsedNaturaColors.json');
    const { natura } = tokens;

    expect(natura).toStrictEqual(expectedJson);
  });
});
