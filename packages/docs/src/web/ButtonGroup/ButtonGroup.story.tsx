import * as React from 'react';
import { text, boolean, select } from '@storybook/addon-knobs';
import withJest from '@decorators/jest/jest';
import withContainer from '@decorators/container/container';

import { Delete, Add, Edit } from '@material-ui/icons';
import { Button, ButtonGroup, IconButton } from '@naturacosmeticos/natds-web';
import { PropTypes } from '@material-ui/core';

export default {
  title: 'Web|ButtonGroup',
  component: Button,
  decorators: [withJest(), withContainer],
  parameters: {
    jestImportPath: 'web',
    jest: ['Button'],
    theme: 'web'
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
  <div>
    <ButtonGroup
      disabled={boolean('disabled', false)}
      color={select('Colors', colors, colors.default)}
      variant={select('Variant', variants, variants.contained)}
      size={select('Size', sizes, sizes.medium)}>
      <Button>{text('button 1', 'Button 1')}</Button>
      <Button>{text('button 2', 'Button 2')}</Button>
      <Button>{text('button 3', 'Button 3')}</Button>
    </ButtonGroup>
  </div>
);

export const Icon = () => (
  <ButtonGroup
    disabled={boolean('disabled', false)}
    color={select('Colors', colors, colors.default)}
    size={select('Size', sizes, sizes.medium)}>
    <IconButton children={<Add />} />
    <IconButton children={<Edit />} />
    <IconButton children={<Delete />} />
  </ButtonGroup>
);

export const Text = () => (
  <ButtonGroup
    color={colors.default}
    variant={variants.text}
    size={sizes.medium}>
    <Button>{text('button 1', 'Button 1')}</Button>
    <Button>{text('button 2', 'Button 2')}</Button>
    <Button>{text('button 3', 'Button 3')}</Button>
  </ButtonGroup>
);

export const Outlined = () => (
  <ButtonGroup
    color={colors.default}
    variant={variants.outlined}
    size={sizes.medium}>
    <Button>{text('button 1', 'Button 1')}</Button>
    <Button>{text('button 2', 'Button 2')}</Button>
    <Button>{text('button 3', 'Button 3')}</Button>
  </ButtonGroup>
);

export const Contained = () => (
  <ButtonGroup
    color={colors.default}
    variant={variants.contained}
    size={sizes.medium}>
    <Button>{text('button 1', 'Button 1')}</Button>
    <Button>{text('button 2', 'Button 2')}</Button>
    <Button>{text('button 3', 'Button 3')}</Button>
  </ButtonGroup>
);
