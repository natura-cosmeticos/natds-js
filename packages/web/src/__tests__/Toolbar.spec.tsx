import React from 'react';
import renderer from 'react-test-renderer';

import { Toolbar } from '../';

describe('Toolbar component', () => {
  describe('rendering', () => {
    test('it should match default snapshot', () => {
      const wrapper = renderer.create(<Toolbar />);
      expect(wrapper.toJSON()).toMatchSnapshot('Default Toolbar snapshot');
    });
  });
});
