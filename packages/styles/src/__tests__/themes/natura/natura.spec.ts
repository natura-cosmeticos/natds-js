import { themes } from '../../../index';

describe('Natura Theme', () => {
  test('it should get the matching Natura Light theme', () => {
    const expectedJson = require('./parsedNaturaLightTheme.json');
    const { natura: { light } } = themes;

    expect(light).toStrictEqual(expectedJson);
  });
  test('it should get the matching Natura Dark theme', () => {
    const expectedJson = require('./parsedNaturaDarkTheme.json');
    const { natura: { dark } } = themes;

    expect(dark).toStrictEqual(expectedJson);
  });
});
