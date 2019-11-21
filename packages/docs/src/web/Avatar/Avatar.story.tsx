import * as React from 'react';
import { number, select, text, color } from '@storybook/addon-knobs';
import withJest from '@decorators/jest/jest';
import withContainer from '@decorators/container/container';
import { Delete } from '@material-ui/icons';
import { Avatar } from '@naturacosmeticos/natds-web';

import AvatarDocs from './Avatar.docs.mdx';

export default {
  title: 'Web|Avatar',
  component: Avatar,
  decorators: [withJest(), withContainer],
  parameters: {
    jestImportPath: 'web',
    jest: ['Avatar'],
    theme: 'web',
    docs: {
      page: AvatarDocs,
    },
  },
};

const source: any = {
  image: require('../../assets/images/1.png'),
  anonymous: require('../../assets/images/avatar.png'),
};

const sizes: any = {
  tiny: 'tiny',
  small: 'small',
  standard: 'standard',
  large: 'large',
  xlarge: 'xlarge',
};

const colors: any = {
  primary: 'primary',
  secondary: 'secondary',
  default: 'default',
};

const types: any = {
  image: 'image',
  icon: 'icon',
  text: 'XD',
};

export const Interactive = () => (
  <Avatar
    alt={text('alt', 'XD')}
    src={select('source', source, source.image)}
    size={select('size', sizes, sizes.xlarge)}
    color={select('color', colors, colors.primary)}
    children={text('children', 'XD')}
  />
);

export const Image = () => (
  <Avatar
    src={source.image}
    alt={text('alt', 'Some alt image text')}
    size={select('size', sizes, sizes.tiny)}
  />
);

export const Anonymous = () => (
  <Avatar
    src={source.anonymous}
    alt={text('alt', 'Some alt image text')}
    size={select('size', sizes, sizes.xlarge)}
    color={select('color', colors, colors.primary)}
  />
);

export const Text = () => (
  <Avatar
    children="AB"
    alt={text('alt', 'Some alt image text')}
    size={select('size', sizes, sizes.xlarge)}
    color={select('color', colors, colors.primary)}
  />
);
