import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';

import { Menu, MenuItem } from '..';

const Component = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  return (
    <>
      <button onClick={handleClick}>open</button>
      <Menu open={!!anchorEl} anchorEl={anchorEl}>
        <MenuItem>Test</MenuItem>
      </Menu>
    </>
  );
};

describe('Menu components', () => {
  test('should match to snapshot - closed Menu', () => {
    const component = mount(<Component />);

    expect(component).matchSnapshot('Menu closed snapshot');
  });

  test('should match to snapshot - opened Menu', () => {
    const component = mount(<Component />);

    component.find('button').simulate('click');

    expect(component).matchSnapshot('Menu opened snapshot');
  });
});
