import { opacity } from '../../../tokens/opacity/opacity';

describe('Opacity', () => {
  test('Opacity matches snapshot', () => {
    expect(opacity).toMatchSnapshot('Opacity Values');
  });
});
