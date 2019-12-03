import React from 'react';
import renderer from 'react-test-renderer';

import { Badge, themes } from '../';
import { Provider } from '../Provider';

describe('Badge component', () => {
  describe('rendering', () => {
    const colors = [
      'primary',
      'secondary',
      'info',
      'error',
      'warning',
      'success',
      'light',
      'dark'
    ];
    const types = [
      'standard'
    ];
    test('it should render each color', () => {
      colors.forEach(color => {
        const wrapper = renderer.create(<Badge color={color}>Mock</Badge>);

        expect(wrapper.toJSON()).toMatchSnapshot('Badge Colors');
      });
    });
    test('it should render each type', () => {
      types.forEach(type => {
        const wrapper = renderer.create(<Badge type={type}>Mock</Badge>);

        expect(wrapper.toJSON()).toMatchSnapshot('Badge Types');
      });
    });
    test('it should render the default color and default type', () => {
      const wrapper = renderer.create(<Badge>Mock</Badge>);

      expect(wrapper.toJSON()).toMatchSnapshot('Badge Default Color And Type');
    });
    test('it should render according to theme', () => {
      const wrapper = renderer.create(<Provider theme={themes.natura.dark}><Badge>Mock</Badge></Provider>);

      expect(wrapper.toJSON()).toMatchSnapshot('Badge Custom Theme');
    });
  });
});
