import * as React from 'react';
import { select, boolean } from '@storybook/addon-knobs';
import withJest from '@decorators/jest/jest';
import withContainer from '@decorators/container/container';
import { Switch } from '@naturacosmeticos/natds-web';
import { PropTypes } from '@material-ui/core';

import SwitchDocs from './Switch.docs.mdx';

export default {
  title: 'Components|SelectControl/Switch',
  component: [Switch],
  decorators: [withJest(), withContainer],
  parameters: {
    jestImportPath: 'web',
    jest: ['Switch'],
    theme: {
      context: 'web'
    },
    docs: {
      page: SwitchDocs,
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
  <Switch
    color={select('colors', colors, colors.secondary)}
    checked={boolean('checked', true)}
    disabled={boolean('disabled', false)}
  />
);
