import * as React from 'react';
import { Button } from '@naturacosmeticos/natds-rn';
import withJest from '@decorators/jest/jest';
import withContainer from '@decorators/container/container';
import { text, boolean, select } from '@storybook/addon-knobs';

import ButtonDocs from './Button.mdx';

export default {
  title: 'Mobile|Button',
  component: Button,
  decorators: [withJest(), withContainer],
  parameters: {
    jestImportPath: 'mobile',
    jest: ['Button'],
    theme: 'mobile',
    docs: {
      page: ButtonDocs
    }
  }
};

const mode: any = {
  text: 'text',
  outlined: 'outlined',
  contained: 'contained'
};

export const Interactive = () => (
  <Button
    onPress={() => {}}
    children={text('children', 'Native Button')}
    mode={select('mode', mode, mode.contained)}
    icon={boolean('icon', false) ? 'camera' : ''}
    dark={boolean('dark', false)}
    compact={boolean('compact', false)}
    loading={boolean('loading', false)}
    disabled={boolean('disabled', false)}
    uppercase={boolean('uppercase', false)}
  />
);

export const Text = () => (
  <Button
    onPress={() => {}}
    children={text('children', 'Native Button')}
    mode={mode.text}
  />
);

export const Outlined = () => (
  <Button
    onPress={() => {}}
    children={text('children', 'Native Button')}
    mode={mode.outlined}
  />
);

export const Contained = () => (
  <Button
    onPress={() => {}}
    children={text('children', 'Native Button')}
    mode={mode.contained}
  />
);
