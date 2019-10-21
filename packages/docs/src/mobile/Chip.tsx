import * as React from 'react';
import { Platform } from 'react-native';
import { Chip, Provider, themes } from '@naturacosmeticos/natds-rn';
import withJest from '../decorators/jest';
import { text } from '@storybook/addon-knobs';

export default {
  title: 'Mobile|Chip',
  component: Chip,
  decorators: [withJest()],
  parameters: { jestImportPath: 'mobile', jest: ['Chip'] }
};

const { natura } = themes;

export const Default = () => (
  <>
    {Platform.OS === 'web' ? (
      <style type="text/css">{`
    @font-face {
      font-family: 'MaterialIcons';
      src: url('${require('react-native-vector-icons/Fonts/MaterialIcons.ttf')}') format('truetype');
    }
  `}</style>
    ) : null}
    <Provider theme={natura}>
      <Chip
        mode='outlined'
        children={text('children', 'Native Chip')}
        onClose={() => undefined}
        onPress={() => undefined}
      />
    </Provider>
  </>
);
