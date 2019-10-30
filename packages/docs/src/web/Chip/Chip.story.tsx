import * as React from 'react';
import { text, boolean, select } from '@storybook/addon-knobs';
import withJest from '@decorators/jest';

import { Chip } from '@naturacosmeticos/natds-web';

export default {
  title: 'Web|Chip',
  component: Chip,
  decorators: [withJest()],
  parameters: {
    jestImportPath: 'web',
    jest: ['Chip'],
    theme: 'web'
  }
};

const colors = {
  primary: 'primary',
  secondary: 'secondary',
  default: 'default'
};

const variants = {
  default: 'default',
  outlined: 'outlined'
};

export const Default = () => (
  <Chip
    clickable={boolean('clickable', true)}
    disabled={boolean('disabled', false)}
    label={text('label', 'Chip Component')}
    onDelete={() => undefined}
    color={select('Color', colors, colors.default)}
    variant={select('Variant', variants, variants.default)}
  />
);
