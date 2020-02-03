import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';

import { Menu, MenuItem } from '..';

describe('Menu components', () => {
  test('should match to snapshot - empty Menu', () => {
    const component = mount(<Menu open={true} />);
    expect(component).matchSnapshot('Menu empty snapshot');
  });

  test('should match to snapshot - with MenuItem', () => {
    const component = mount(
      <Menu open={true}>
        <MenuItem>Test</MenuItem>
      </Menu>
    );
    expect(component).matchSnapshot('Menu with MenuItem snapshot');
  });
});
