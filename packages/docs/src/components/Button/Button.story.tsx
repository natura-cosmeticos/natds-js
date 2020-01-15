import * as React from 'react';
import { text, boolean, select } from '@storybook/addon-knobs';
import withJest from '@decorators/jest/jest';
import withContainer from '@decorators/container/container';
import { Delete } from '@material-ui/icons';

import { Button } from '@naturacosmeticos/natds-web';
import { PropTypes } from '@material-ui/core';

import ButtonDocs from './Button.docs.mdx';

export default {
  title: 'Components|Buttons/Button',
  component: Button,
  decorators: [withJest(), withContainer],
  parameters: {
    jestImportPath: 'web',
    jest: ['Button'],
    theme: {
      context: 'web'
    },
    docs: {
      page: ButtonDocs
    }
  }
};

const primary: PropTypes.Color = 'primary';
const secondary: PropTypes.Color = 'secondary';
const _default: PropTypes.Color = 'default';

const colors: any = {
  primary,
  secondary,
  default: _default
};

const variants: any = {
  text: 'text',
  outlined: 'outlined',
  contained: 'contained'
};

const sizes: any = {
  small: 'small',
  medium: 'medium',
  large: 'large'
};

export const Interactive = () => (
  <Button
    color={select('Colors', colors, colors.primary)}
    variant={select('Variant', variants, variants.contained)}
    size={select('Size', sizes, sizes.medium)}
    startIcon={boolean('Start Icon', false) ? <Delete /> : null}
    endIcon={boolean('End Icon', false) ? <Delete /> : null}
    disabled={boolean('Disabled', false)}>
    {text('Label', 'Button Component')}
  </Button>
);

export const Text = () => (
  <Button
    color={select('Colors', colors, colors.primary)}
    variant={variants.text}
    size={select('Size', sizes, sizes.medium)}>
    {text('label', 'Button Component')}
  </Button>
);

export const Outlined = () => (
  <Button
    color={select('Colors', colors, colors.primary)}
    variant={variants.outlined}
    size={select('Size', sizes, sizes.medium)}>
    {text('label', 'Button Component')}
  </Button>
);

export const Contained = () => (
  <Button
    color={select('Colors', colors, colors.primary)}
    variant={variants.contained}
    size={select('Size', sizes, sizes.medium)}>
    {text('label', 'Button Component')}
  </Button>
);
