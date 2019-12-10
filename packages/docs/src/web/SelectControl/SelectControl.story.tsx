import * as React from 'react';
import { select, boolean } from '@storybook/addon-knobs';
import withJest from '@decorators/jest/jest';
import withContainer from '@decorators/container/container';
import { Checkbox, Radio, Switch } from '@naturacosmeticos/natds-web';
import { PropTypes } from '@material-ui/core';

import SelectControlDocs from './SelectControl.docs.mdx';

export default {
  title: 'Web|SelectControl',
  component: [Checkbox, Radio, Switch],
  decorators: [withJest(), withContainer],
  parameters: {
    jestImportPath: 'web',
    jest: ['Checkbox', 'Radio', 'Switch'],
    theme: 'web',
    docs: {
      page: SelectControlDocs,
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
  <>
    <Checkbox
      color={select('colors', colors, colors.secondary)}
      checked={boolean('checked', true)}
      disabled={boolean('disabled', false)}
    />
    <Radio
      color={select('colors', colors, colors.secondary)}
      checked={boolean('checked', true)}
      disabled={boolean('disabled', false)}
    />
    <Switch
      color={select('colors', colors, colors.secondary)}
      checked={boolean('checked', true)}
      disabled={boolean('disabled', false)}
    />
  </>
);

export const CheckboxControl = () => (
  <>
    <Checkbox checked={false} />
    <Checkbox checked={true} />
    <Checkbox checked={true} color="primary" />
    <Checkbox checked={true} color="default" />
    <Checkbox checked={false} disabled />
    <Checkbox checked={true} disabled />
  </>
);

export const RadioControl = () => (
  <>
    <Radio checked={false} />
    <Radio checked={true} />
    <Radio checked={true} color="primary" />
    <Radio checked={true} color="default" />
    <Radio checked={false} disabled />
    <Radio checked={true} disabled />
  </>
);

export const SwitchControl = () => (
  <>
    <Switch checked={false} />
    <Switch checked={true} />
    <Switch checked={true} color="primary" />
    <Switch checked={true} color="default" />
    <Switch checked={false} disabled />
    <Switch checked={true} disabled />
  </>
);
