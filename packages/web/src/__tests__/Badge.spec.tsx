import React from 'react';
import { expect } from 'chai';
import renderer from 'react-test-renderer';

import Badge from '../Components/Badge';

export const anchors: any = {
  'topleft': { 'horizontal': 'left',
    'vertical': 'top' },
  'topright': { 'horizontal': 'right',
    'vertical': 'top' },
  'bottomleft': { 'horizontal': 'left',
    'vertical': 'bottom' },
  'bottomright': { 'horizontal': 'right',
    'vertical': 'bottom' }
};

export const colors: any = {
  'default': 'default',
  'error': 'error',
  'primary': 'primary',
  'secondary': 'secondary'
};

export const variants: any = {
  'dot': 'dot',
  'standard': 'standard'
};

export const overlaps: any = {
  'circle': 'circle',
  'rectangle': 'rectangle'
};

describe('Badge component', () => {
  Object.keys(colors).forEach((color: string) => {
    test(`should match snapshot - Any valid Badge with ${color} color`, () => {
      const component = renderer.create(<Badge color={color as any}>Badge</Badge>).toJSON();

      expect(component).matchSnapshot(`Badge snapshot - with ${color} color`);
    });
  });

  Object.values(anchors).forEach((anchor: any) => {
    test(`should match snapshot - Any valid Badge with ${anchor} anchor`, () => {
      const component = renderer.create(<Badge anchorOrigin={anchor as any}>Badge</Badge>).toJSON();

      expect(component).matchSnapshot(`Badge snapshot - with ${anchor} anchor`);
    });
  });

  Object.keys(variants).forEach((variant: string) => {
    test(`should match snapshot - Any valid Badge with ${variant} variant`, () => {
      const component = renderer.create(<Badge variant={variant as any}>Badge</Badge>).toJSON();

      expect(component).matchSnapshot(`Badge snapshot - with ${variant} variant`);
    });
  });

  Object.keys(overlaps).forEach((overlap: string) => {
    test(`should match snapshot - Any valid Badge with ${overlap} overlap`, () => {
      const component = renderer.create(<Badge overlap={overlap as any}>Badge</Badge>).toJSON();

      expect(component).matchSnapshot(`Badge snapshot - with ${overlap} overlap`);
    });
  });
});
