import { themes } from '../../../index';

describe('Natura Theme', () => {
  test('it should get the matching Natura Light theme', () => {
    const expectedJson = require('./parsedNaturaLightTheme.json');
    const { naturaLight } = themes;

    expect(naturaLight).toStrictEqual(expectedJson);
  });
  test('it should get the matching Natura Dark theme', () => {
    const expectedJson = require('./parsedNaturaDarkTheme.json');
    const { naturaDark } = themes;

    expect(naturaDark).toStrictEqual(expectedJson);
  });
});
