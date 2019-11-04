import * as React from 'react';
import { Chip } from '@naturacosmeticos/natds-rn';
import withJest from '@decorators/jest/jest';
import withContainer from '@decorators/container/container';
import { text } from '@storybook/addon-knobs';

export default {
  title: 'Mobile|Chip',
  component: Chip,
  decorators: [withJest(), withContainer],
  parameters: {
    jestImportPath: 'mobile',
    jest: ['Chip'],
    theme: 'mobile'
  }
};

export const Default = () => (
  <Chip
    mode='outlined'
    children={text('children', 'Native Chip')}
    onClose={() => {}}
    onPress={() => {}}
  />
);
