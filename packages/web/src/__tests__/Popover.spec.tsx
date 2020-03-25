import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';

import Popover from '../Components/Popover';

const placements: any = {
  bottomEnd: 'bottom-end',
  bottomStart: 'bottom-start',
  bottom: 'bottom',
  leftEnd: 'left-end',
  leftStart: 'left-start',
  left: 'left',
  rightEnd: 'right-end',
  rightStart: 'right-start',
  right: 'right',
  topEnd: 'top-end',
  topStart: 'top-start',
  top: 'top',
};

describe('Popover component', () => {
  Object.keys(placements).forEach((placement: string) => {
    test(`should match snapshot - Any valid Popover with ${placement} placement`, () => {
      const component = mount(
        <Popover open={true} placement={placement as any}>
          content
        </Popover>
      );
      expect(component).matchSnapshot(
        `Popover snapshot - with ${placement} placement`
      );
    });
  });
});
