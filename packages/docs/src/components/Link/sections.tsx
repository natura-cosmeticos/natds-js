import React from 'react';
import { Link } from '@naturacosmeticos/natds-web';

export const colorList: any = {
  default: 'default',
  initial: 'initial',
  inherit: 'inherit',
  error: 'error',
  primary: 'primary',
  secondary: 'secondary',
  textPrimary: 'textPrimary',
  textSecondary: 'textSecondary'
};

export const underlineList: any = {
  none: 'none',
  hover: 'hover',
  always: 'always'
};

export const variantList: any = {
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
  inherit: 'inherit'
};

function buildSection(list, prop) {
  return Object.keys(list).map((item) => {
    const props = { [prop]: item };
    return {
      title: item,
      component: <Link component="button" variant="body2" {...props}>Link</Link>
    };
  });
}

export const colors = buildSection(colorList, 'color');

export const variants = buildSection(variantList, 'variant');

export const underlines = buildSection(underlineList, 'underline');
