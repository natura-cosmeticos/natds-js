import * as React from 'react';
import { Badge } from "@naturacosmeticos/natds-web";
import withJest from '@decorators/jest/jest';
import withContainer from '@decorators/container/container';
import { text, select } from '@storybook/addon-knobs';

import BadgeDocs from './Badge.docs.mdx';

export default {
  title: 'Web|Badge',
  component: Badge,
  decorators: [withJest(), withContainer],
  parameters: {
    jestImportPath: 'web',
    jest: ['Badge'],
    theme: 'web',
    docs: {
      page: BadgeDocs
    }
  }
};

const colors: any = {
  primary: 'primary',
  secondary: 'secondary',
  info: 'info',
  error: 'error',
  warning: 'warning',
  success: 'success',
  light: 'light',
  dark: 'dark'
};

const types: any = {
  standard: 'standard'
};

export const Interactive = () => {
  return (
    <Badge
      color={select("color", colors, colors.primary)}
      type={select("type", types, types.standard)}
    >
      {text("children", "Badge")}
    </Badge>
  );
};

export const Standard = () => {
  return (
    <Badge
      color={select("color", colors, colors.primary)}
      type="standard"
    >
      {text("children", "Badge")}
    </Badge>
  );
};
