import * as React from 'react';
import { Chip } from '@naturacosmeticos/natds-web';
import withJest from '../decorators/jest';
import { text, boolean } from '@storybook/addon-knobs';

export default {
  title: 'Web|Chip',
  component: Chip,
  decorators: [withJest()],
  parameters: {
    jestImportPath: 'web',
    jest: ['Chip']
  }
};

export const Default = () => (
  <Chip
    clickable={boolean('clickable', true)}
    disabled={boolean('disabled', false)}
    label={text('label', 'Chip Component')}
    onDelete={() => undefined}
  />
);
