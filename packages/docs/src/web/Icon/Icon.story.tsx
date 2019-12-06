import * as React from 'react';
import { boolean, select } from '@storybook/addon-knobs';
import withJest from '@decorators/jest/jest';
import withContainer from '@decorators/container/container';

import { Icon } from '@naturacosmeticos/natds-web';
import IconDocs from './Icon.docs.mdx';

export default {
  title: 'Web|Icon',
  component: Icon,
  decorators: [withJest(), withContainer],
  parameters: {
    jestImportPath: 'web',
    jest: ['Icon'],
    theme: 'web',
    docs: {
      page: IconDocs
    }
  }
};

const icons: any = {
  'autofilter-outlined': 'autofilter-outlined',
  'cancel-filled': 'cancel-filled',
  'cancel-outlined': 'cancel-outlined',
  'check-filled': 'check-filled',
  'check-outlined': 'check-outlined',
  'pause-filled': 'pause-filled',
  'play-filled': 'play-filled',
  'send-outlined': 'send-outlined'
};

export const Interactive = () => (
  <Icon
    name={select('Icon Name', icons, icons['autofilter-outlined'])}
  />
);
