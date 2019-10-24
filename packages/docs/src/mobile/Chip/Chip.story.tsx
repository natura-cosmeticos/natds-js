import * as React from 'react';
import { Chip, Provider, themes } from '@naturacosmeticos/natds-rn';
import withJest from '@decorators/jest';
import MobileDecorator from '@decorators/mobile';
import { text } from '@storybook/addon-knobs';

export default {
  title: 'Mobile|Chip',
  component: Chip,
  decorators: [withJest(), MobileDecorator],
  parameters: { jestImportPath: 'mobile', jest: ['Chip'] }
};

const { natds } = themes;

export const Default = () => (
    <Provider theme={natds}>
      <Chip
        mode='outlined'
        children={text('children', 'Native Chip')}
        onClose={() => undefined}
        onPress={() => undefined}
      />
    </Provider>
);
