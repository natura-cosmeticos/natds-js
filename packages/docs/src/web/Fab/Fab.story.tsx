import * as React from 'react';
import { Fab } from '@naturacosmeticos/natds-web';
import AddIcon from '@material-ui/icons/Add';
import withJest from '@decorators/jest/jest';
import withContainer from '@decorators/container/container';
import { select, boolean, text } from '@storybook/addon-knobs';

import FabDocs from './Fab.docs.mdx';

export default {
  title: 'Web|Fab',
  component: Fab,
  decorators: [withJest(), withContainer],
  parameters: {
    jestImportPath: 'web',
    jest: ['Fab'],
    theme: 'web',
    docs: {
      page: FabDocs
    }
  }
};

const colors: any = {
  primary: 'primary',
  secondary: 'secondary',
  light: 'light'
};

const sizes: any = {
  small: 'small',
  medium: 'medium',
  large: 'large'
};

const variants: any = {
  round: 'round',
  extended: 'extended'
};

export const Interactive = () => {
  return (
    <Fab
      color={select('color', colors, colors.primary)}
      size={select('size', sizes, sizes.large)}
      variant={select('variant', variants, variants.round)}
      disabled={boolean('disabled', false)}
    >
      <AddIcon />
    </Fab>
  );
};

export const Round = () => {
  return (
    <Fab
      color={select('color', colors, colors.primary)}
      size={select('size', sizes, sizes.large)}
      disabled={boolean('disabled', false)}
      variant="round"
    >
      <AddIcon />
    </Fab>
  );
};

export const Extended = () => {
  return (
    <Fab
      color={select('color', colors, colors.primary)}
      size={select('size', sizes, sizes.large)}
      disabled={boolean('disabled', false)}
      children={text('children', 'Extended')}
      variant="extended"
    />
  );
};
