import { tokens } from '../../../index';

describe('Natura Spacing Tokens', () => {
  test('it should match the expected natura tokens json', () => {
    const expectedJson = require('./parsedSpacing.json');
    const { spacing } = tokens;

    expect(spacing).toStrictEqual(expectedJson);
  });
});
