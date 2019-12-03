import * as React from 'react';
import { Badge } from "@naturacosmeticos/natds-web";
import withJest from '@decorators/jest/jest';
import withContainer from '@decorators/container/container';
import { text, select } from '@storybook/addon-knobs';

export default {
  title: 'Web|Badge',
  component: Badge,
  decorators: [withJest(), withContainer],
  parameters: {
    jestImportPath: 'web',
    jest: ['Badge'],
    theme: 'web',
  }
};

const colors: any = {
  primary: 'primary',
  seondary: 'secondary',
  info: 'info',
  error: 'error',
  warning: 'warning',
  success: 'success',
  light: 'light',
  dark: 'dark'
};

export const Interfactive = () => {
  return <Badge color={select("color", colors, colors.primary)} >{text("children", "Badge")}</Badge>;
};
