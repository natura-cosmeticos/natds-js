import { tokens } from '../../../index';

describe('Natura Avatar Sizes Tokens', () => {
  test('it should match the expected natura tokens json', () => {
    const expectedJson = require('./parsedAvatarSizes.json');
    const { avatarSizes } = tokens;

    expect(avatarSizes).toStrictEqual(expectedJson);
  });
});
