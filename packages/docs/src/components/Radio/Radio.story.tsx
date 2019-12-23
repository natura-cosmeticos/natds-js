import * as React from 'react';
import { select, boolean } from '@storybook/addon-knobs';
import withJest from '@decorators/jest/jest';
import withContainer from '@decorators/container/container';
import { Radio } from '@naturacosmeticos/natds-web';
import { PropTypes } from '@material-ui/core';

import RadioDocs from './Radio.docs.mdx';

export default {
  title: 'Components|SelectControl/Radio',
  component: [Radio],
  decorators: [withJest(), withContainer],
  parameters: {
    jestImportPath: 'web',
    jest: ['Radio'],
    theme: {
      context: 'web'
    },
    docs: {
      page: RadioDocs,
    },
  },
};

const primary: PropTypes.Color = 'primary';
const secondary: PropTypes.Color = 'secondary';
const _default: PropTypes.Color = 'default';

const colors: any = {
  primary,
  secondary,
  default: _default,
};

export const Interactive = () => (
  <Radio
    color={select('colors', colors, colors.secondary)}
    checked={boolean('checked', true)}
    disabled={boolean('disabled', false)}
  />
);
