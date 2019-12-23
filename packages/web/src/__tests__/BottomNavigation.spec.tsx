import React from 'react';
import renderer from 'react-test-renderer';

import { BottomNavigation } from '..';

describe('BottomNavigation component', () => {
  describe('rendering', () => {
    test('it should match to default snapshot', () => {
      const wrapper = renderer.create(<BottomNavigation/>);
      expect(wrapper.toJSON()).toMatchSnapshot('BottomNavigation default snapshot');
    });
  });
});
