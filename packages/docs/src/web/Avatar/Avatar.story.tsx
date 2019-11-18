import * as React from 'react';
import { Avatar } from '@naturacosmeticos/natds-web';
import { number, select, text } from '@storybook/addon-knobs';
import withJest from '@decorators/jest/jest';
import withContainer from '@decorators/container/container';
import { Delete } from '@material-ui/icons';

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

const variant: any = {
  circle: 'circle',
  rounded: 'rounded',
  square: 'square',
};

const source: any = {
  image: require('../../assets/images/1.jpg'),
  anonymous: require('../../assets/images/avatar.jpg'),
};

export const Interactive = () => (
  <Avatar
    alt={text('alt', '')}
    src={select('source', source, source.image)}
    variant={select('variant', variant, variant.circle)}
  />
);

export const Image = () => (
  <Avatar src={source.image} />
);

export const Anonymous = () => (
  <Avatar src={source.anonymous} />
);

export const Text = () => (
  <Avatar children='AB' />
);

export const Icon = () => (
  <Avatar children={<Delete />} />
);
