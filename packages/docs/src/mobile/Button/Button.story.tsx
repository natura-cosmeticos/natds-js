import * as React from 'react';
import { Button } from '@naturacosmeticos/natds-rn';
import withJest from '@decorators/jest/jest';
import withContainer from '@decorators/container/container';
import { text, boolean, select } from '@storybook/addon-knobs';

export default {
  title: 'Mobile|Button',
  component: Button,
  decorators: [withJest(), withContainer],
  parameters: {
    jestImportPath: 'mobile',
    jest: ['Button'],
    theme: 'mobile'
  }
};

const mode: any = {
  outlined: 'outlined',
  flat: 'flat'
};

export const Default = () => (
  <Button
    onPress={() => {}}
    children={text('children', 'Native Button')}
    mode={select('mode', mode, mode.flat)}
    disabled={boolean('disabled', false)}
    icon={boolean('icon', false) ? 'camera' : ''}
  />
);
