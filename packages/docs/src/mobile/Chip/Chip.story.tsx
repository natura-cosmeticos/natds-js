import * as React from 'react';
import { Chip } from '@naturacosmeticos/natds-rn';
import withJest from '@decorators/jest';
import MobileDecorator from '@decorators/mobile';
import { text } from '@storybook/addon-knobs';

export default {
  title: 'Mobile|Chip',
  component: Chip,
  decorators: [withJest(), MobileDecorator],
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
