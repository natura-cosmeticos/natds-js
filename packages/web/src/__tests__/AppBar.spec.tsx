import React from 'react';
import renderer from 'react-test-renderer';

import { AppBar } from '../';

describe('AppBar component', () => {
  describe('rendering', () => {
    test('it should match default snapshot', () => {
      const wrapper = renderer.create(<AppBar />);
      expect(wrapper.toJSON()).toMatchSnapshot('Default AppBar snapshot');
    });
    test('it should match noElevation snapshot', () => {
      const wrapper = renderer.create(<AppBar noElevation />);
      expect(wrapper.toJSON()).toMatchSnapshot('noElevation AppBar snapshot');
    });
  });
});
