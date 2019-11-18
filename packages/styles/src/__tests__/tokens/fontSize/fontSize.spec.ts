import { fontSize } from '../../../tokens/fontSize/fontSize';
import parsedFontSize from './parsedFontSize.json';

describe('FontSize tokens', () => {
  test('it should match the expected font size tokens', () => {
    expect(fontSize).toStrictEqual(parsedFontSize);
  });
});
