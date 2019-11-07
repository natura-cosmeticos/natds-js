import * as React from 'react';
import { boolean, select } from '@storybook/addon-knobs';
import withJest from '@decorators/jest/jest';
import withContainer from '@decorators/container/container';

import { IconButton } from '@naturacosmeticos/natds-web';
import { PropTypes } from '@material-ui/core';
import Delete from '@material-ui/icons/Delete';

export default {
  title: 'Web|IconButton',
  component: IconButton,
  decorators: [withJest(), withContainer],
  parameters: {
    jestImportPath: 'web',
    jest: ['IconButton'],
    theme: 'web'
  }
};

const primary: PropTypes.Color = 'primary';
const secondary: PropTypes.Color = 'secondary';
const _default: PropTypes.Color = 'default';

const colors: any = {
  primary,
  secondary,
  default: _default
};

const sizes: any = {
  small: 'small',
  medium: 'medium'
};

export const Interactive = () => (
  <IconButton
    disabled={boolean('disabled', false)}
    color={select('Colors', colors, colors.default)}
    size={select('Size', sizes, sizes.medium)}
    children={<Delete />}
  />
);
