import React from 'react';
import { expect } from 'chai';
import renderer from 'react-test-renderer';

import Link from '../Components/Link';

const colors: any = {
  error: 'error',
  inherit: 'inherit',
  primary: 'primary',
  secondary: 'secondary',
  textPrimary: 'textPrimary',
  textSecondary: 'textSecondary'
};

const underlines: any = {
  none: 'none',
  hover: 'hover',
  always: 'always'
};

const variants: any = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  subtitle1: 'subtitle1',
  subtitle2: 'subtitle2',
  body1: 'body1',
  body2: 'body2',
  caption: 'caption',
  button: 'button',
  overline: 'overline',
  srOnly: 'srOnly',
  inherit: 'inherit'
};

describe('Link component', () => {
  Object.keys(colors).forEach((color: string) => {
    test(`should match snapshot - Any valid Link with ${color} color`, () => {
      const component = renderer.create(<Link color={color as any}>link</Link>).toJSON();
      expect(component).matchSnapshot(`Link snapshot - with ${color} color`);
    });
  });

  Object.keys(underlines).forEach((underline: string) => {
    test(`should match snapshot - Any valid Link with ${underline} underline`, () => {
      const component = renderer.create(<Link underline={underline as any}>link</Link>).toJSON();
      expect(component).matchSnapshot(`Link snapshot - with ${underline} color`);
    });
  });

  Object.keys(variants).forEach((variant: string) => {
    test(`should match snapshot - Any valid Link with ${variant} variant`, () => {
      const component = renderer.create(<Link variant={variant as any}>link</Link>).toJSON();
      expect(component).matchSnapshot(`Link snapshot - with ${variant} color`);
    });
  });
});
