import { tokens } from '../../../../index';

describe('Natura Color Tokens', () => {
  test('it should match the expected natura tokens json', () => {
    const expectedJson = require('./parsedNaturaColors.json');
    const { natura } = tokens.colors;

    expect(natura).toStrictEqual(expectedJson);
  });
});
