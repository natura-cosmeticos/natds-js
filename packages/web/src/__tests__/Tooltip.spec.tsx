import React from 'react';
import { expect } from 'chai';
import renderer from 'react-test-renderer';

import Tooltip from '../Components/Tooltip';

const placements: any = {
  'bottom-end': 'bottom-end',
  'bottom-start': 'bottom-start',
  'bottom': 'bottom',
  'left-end': 'left-end',
  'left-start': 'left-start',
  'left': 'left',
  'right-end': 'right-end',
  'right-start': 'right-start',
  'right': 'right',
  'top-end': 'top-end',
  'top-start': 'top-start',
  'top': 'top'
};


describe('Tooltip component', () => {
  Object.keys(placements).forEach((placement: string) => {
    test(`should match snapshot - Any valid Tooltip with ${placement} placement`, () => {
      const component = renderer.create(<Tooltip title="some title" placement={placement as any}><div>some content</div></Tooltip>).toJSON();
      expect(component).matchSnapshot(`Tooltip snapshot - with ${placement} color`);
    });
  });
});
