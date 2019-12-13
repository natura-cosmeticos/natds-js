import * as React from 'react';
import { Avatar } from '@naturacosmeticos/natds-rn';
import { tokens } from '@naturacosmeticos/natds-styles';
import { select, text } from '@storybook/addon-knobs';
import withJest from '@decorators/jest/jest';
import withContainer from '@decorators/container/container';
import AvatarDocs from './Avatar.docs.mdx';

export default {
  title: 'Mobile|Avatar',
  component: Avatar,
  decorators: [withJest(), withContainer],
  parameters: {
    jestImportPath: 'mobile',
    jest: ['Avatar'],
    theme: 'mobile',
    docs: {
      page: AvatarDocs,
    },
  },
};

const type: any = {
  image: 'image',
  text: 'text',
  icon: 'icon',
};

const source: any = {
  image: require('../../assets/images/1.png'),
  anonymous: require('../../assets/images/avatar.png'),
};

const sizes: any = Object.keys(tokens.avatarSizes);

export const Interactive = () => (
  <Avatar
    type={select('type', type, type.image)}
    label={text('label', '')}
    icon={text('icon', '')}
    source={select('source', source, source.image)}
    avatarSizes={select('avatarSizes', sizes, 'huge')}
  />
);

export const Image = () => (
  <Avatar type="image" label="" icon="" source={source.image} />
);

export const Anonymous = () => (
  <Avatar type="image" label="" icon="" source={source.anonymous} />
);

export const Text = () => <Avatar type="text" label="XD" icon="" source={{}} />;

export const Icon = () => (
  <Avatar type="icon" label="" icon="delete" source={{}} />
);
