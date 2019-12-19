import * as React from 'react';
import { Image } from 'react-native';
import { Chip } from '@naturacosmeticos/natds-rn';
import withJest from '@decorators/jest/jest';
import withContainer from '@decorators/container/container';
import { text, boolean, select } from '@storybook/addon-knobs';
import avatar from '../../assets/images/avatar.png';

import ButtonDocs from './Chip.docs.mdx';

export default {
  title: 'Mobile|Chip',
  component: Chip,
  decorators: [withJest(), withContainer],
  parameters: {
    jestImportPath: 'mobile',
    jest: ['Chip'],
    theme: {
      context: 'mobile'
    },
    docs: {
      page: ButtonDocs,
    },
  },
};

const mode: any = {
  outlined: 'outlined',
  flat: 'flat',
};

export const Default = () => (
  <Chip
    onClose={() => {}}
    onPress={() => {}}
    children={text('children', 'Native Chip')}
    mode={select('mode', mode, mode.flat)}
    disabled={boolean('disabled', false)}
    selected={boolean('selected', false)}
    icon={boolean('icon', false) ? 'camera' : ''}
    avatar={boolean('avatar', false) ? <Image source={avatar} /> : null}
  />
);
