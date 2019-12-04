import * as React from 'react';
import { text, boolean, select } from '@storybook/addon-knobs';
import withJest from '@decorators/jest/jest';
import withContainer from '@decorators/container/container';

import { Chip } from '@naturacosmeticos/natds-web';
import { PropTypes } from '@material-ui/core';

import ChipDocs from './Chip.docs.mdx';

export default {
  title: 'Web|Chip',
  component: Chip,
  decorators: [withJest(), withContainer],
  parameters: {
    jestImportPath: 'web',
    jest: ['Chip'],
    theme: 'web',
    docs: {
      page: ChipDocs
    }
  }
};

const primary:PropTypes.Color = 'primary';
const secondary:PropTypes.Color = 'secondary';
const _default:PropTypes.Color = 'default';

const colors:any = {
  primary,
  secondary,
  default: _default
};

const variant: any = {
  default: 'default',
  outlined: 'outlined'
};

const size: any = {
  small: 'small',
  medium: 'medium'
};

export const Default = () => (
  <Chip
    clickable={boolean('clickable', true)}
    disabled={boolean('disabled', false)}
    label={text('label', 'Chip Component')}
    onDelete={() => undefined}
    color={select('Colors', colors, colors.default)}
    variant={select('Variant', variant, variant.default)}
    size={select('Size', size, size.medium)}
  />
);
