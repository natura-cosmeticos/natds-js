import * as React from 'react';
import { select, boolean } from '@storybook/addon-knobs';
import withJest from '@decorators/jest/jest';
import withContainer from '@decorators/container/withContainer';
import { Checkbox } from '@naturacosmeticos/natds-web';
import { PropTypes } from '@material-ui/core';

import CheckboxDocs from './Checkbox.docs.mdx';

export default {
  title: 'Components|SelectControl/Checkbox',
  component: [Checkbox],
  decorators: [withJest(), withContainer],
  parameters: {
    jestImportPath: 'web',
    jest: ['Checkbox'],
    theme: {
      context: 'web'
    },
    docs: {
      page: CheckboxDocs,
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
  <Checkbox
    color={select('colors', colors, colors.secondary)}
    checked={boolean('checked', true)}
    disabled={boolean('disabled', false)}
  />
);
