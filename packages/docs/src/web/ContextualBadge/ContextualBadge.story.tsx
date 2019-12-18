import * as React from 'react';
import { ContextualBadge } from "@naturacosmeticos/natds-web";
import withJest from '@decorators/jest/jest';
import withContainer from '@decorators/container/container';
import { text, select } from '@storybook/addon-knobs';

import ContextualBadgeDocs from './ContextualBadge.docs.mdx';

export default {
  title: 'Web|ContextualBadge',
  component: ContextualBadge,
  decorators: [withJest(), withContainer],
  parameters: {
    jestImportPath: 'web',
    jest: ['ContextualBadge'],
    theme: {
      context: 'web'
    },
    docs: {
      page: ContextualBadgeDocs
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
    <ContextualBadge
      color={select("color", colors, colors.primary)}
      type={select("type", types, types.standard)}
    >
      {text("children", "Example")}
    </ContextualBadge>
  );
};

export const Standard = () => {
  return (
    <ContextualBadge
      color={select("color", colors, colors.primary)}
      type="standard"
    >
      {text("children", "Standard")}
    </ContextualBadge>
  );
};
