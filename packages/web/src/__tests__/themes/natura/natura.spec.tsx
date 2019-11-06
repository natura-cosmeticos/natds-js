import { themes } from '../../../Themes';
import naturaLight from './naturaLightThemeParsed.json';
import naturaDark from './naturaDarkThemeParsed.json';

describe('Themes', () => {
  test('It should match the natura light theme snapshot', () => {
    const { natura: { light } } = themes;

    expect(light).toStrictEqual(naturaLight);
  });

  test('it should match the natura dark theme snapshot', () => {
    const { natura: { dark } } = themes;

    expect(dark).toStrictEqual(naturaDark);
  });
});
