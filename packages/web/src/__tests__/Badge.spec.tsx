import React from 'react';
import { shallow } from 'enzyme';

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
        const wrapper = shallow(<Badge color={color}>Mock</Badge>);

        expect(wrapper.html()).toMatchSnapshot('Badge Colors');
      });
    });
    test('it should render each type', () => {
      types.forEach(type => {
        const wrapper = shallow(<Badge type={type}>Mock</Badge>);

        expect(wrapper.html()).toMatchSnapshot('Badge Types');
      });
    });
    test('it should render the default color and default type', () => {
      const wrapper = shallow(<Badge>Mock</Badge>);

      expect(wrapper.html()).toMatchSnapshot('Badge Default Color And Type');
    });
    test('it should render according to theme', () => {
      const wrapper = shallow(<Provider theme={themes.natura.dark}><Badge>Mock</Badge></Provider>);

      expect(wrapper.html()).toMatchSnapshot('Badge Custom Theme');
    });
  });
});
