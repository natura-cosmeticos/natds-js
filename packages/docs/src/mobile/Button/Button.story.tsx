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
};

export const Interactive = () => (
  <Button
    onPress={() => {}}
    colorType={select('colors', colors, colors.primary)}
    elevation={number('elevation', 3)}
    mode={select('mode', mode, mode.contained)}
    icon={boolean('icon', false) ? 'delete' : ''}
    disabled={boolean('disabled', false)}
    children={text('children', 'Button Component')}
  />
);

export const Text = () => (
  <Button
    onPress={() => {}}
    children={text('children', 'Button Component')}
    mode={mode.text}
  />
);

export const Outlined = () => (
  <Button
    onPress={() => {}}
    children={text('children', 'Button Component')}
    mode={mode.outlined}
  />
);

export const Contained = () => (
  <Button
    onPress={() => {}}
    children={text('children', 'Button Component')}
    mode={mode.contained}
  />
);
