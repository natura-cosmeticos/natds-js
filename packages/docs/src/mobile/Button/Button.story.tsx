import * as React from 'react';
import { Button } from '@naturacosmeticos/natds-rn';
import withJest from '@decorators/jest/jest';
import withContainer from '@decorators/container/container';
import { text, boolean, select, number } from '@storybook/addon-knobs';

import ButtonDocs from './Button.docs.mdx';

export default {
  title: 'Mobile|Button',
  component: Button,
  decorators: [withJest(), withContainer],
  parameters: {
    jestImportPath: 'mobile',
    jest: ['Button'],
    theme: 'mobile',
    docs: {
      page: ButtonDocs,
    },
  },
};

const mode: any = {
  text: 'text',
  outlined: 'outlined',
  contained: 'contained',
};

const colors: any = {
  primary: 'primary',
  secondary: 'secondary',
  default: 'default',
};

const size: any = {
  small: 'small',
  medium: 'medium',
  large: 'large',
};

export const Interactive = () => (
  <Button
    onPress={() => {}}
    colorType={select('colors', colors, colors.primary)}
    mode={select('mode', mode, mode.contained)}
    size={select('size', size, size.medium)}
    elevation={number('elevation', 3)}
    icon={boolean('icon', false) ? 'delete' : ''}
    disabled={boolean('disabled', false)}
    children={text('children', 'Button Component')}
  />
);

export const Text = () => (
  <Button
    onPress={() => {}}
    colorType={select('colors', colors, colors.primary)}
    mode={mode.text}
    size={select('size', size, size.medium)}
    children={text('children', 'Button Component')}
  />
);

export const Outlined = () => (
  <Button
    onPress={() => {}}
    colorType={select('colors', colors, colors.primary)}
    mode={mode.outlined}
    size={select('size', size, size.medium)}
    children={text('children', 'Button Component')}
  />
);

export const Contained = () => (
  <Button
    onPress={() => {}}
    colorType={select('colors', colors, colors.primary)}
    mode={mode.contained}
    size={select('size', size, size.medium)}
    elevation={3}
    children={text('children', 'Button Component')}
  />
);
