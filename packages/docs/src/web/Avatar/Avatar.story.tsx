import * as React from 'react';
import { select, text } from '@storybook/addon-knobs';
import withJest from '@decorators/jest/jest';
import withContainer from '@decorators/container/container';
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
  none: null
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
    alt={text('alt', 'XD')}
    size={select('size', sizes, sizes.xlarge)}
  />
);

export const Anonymous = () => (
  <Avatar
    src={source.anonymous}
    alt={text('alt', 'XD')}
    size={select('size', sizes, sizes.xlarge)}
    color={select('color', colors, colors.primary)}
  />
);

export const Text = () => (
  <Avatar
    children={text('children', 'XD')}
    alt={text('alt', 'XD')}
    size={select('size', sizes, sizes.xlarge)}
    color={select('color', colors, colors.primary)}
  />
);
