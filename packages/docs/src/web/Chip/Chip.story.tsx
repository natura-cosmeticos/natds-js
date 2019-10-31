import * as React from 'react';
import { text, boolean } from '@storybook/addon-knobs';
import withJest from '@decorators/jest';

import { Chip, Provider, themes } from '@naturacosmeticos/natds-web';

export default {
  title: 'Web|Chip',
  component: Chip,
  decorators: [withJest()],
  parameters: {
    jestImportPath: 'web',
    jest: ['Chip']
  }
};

export const Default = () => (
  <Provider theme={themes.natura.light}>
    <Chip
      clickable={boolean('clickable', true)}
      disabled={boolean('disabled', false)}
      label={text('label', 'Chip Component')}
      onDelete={() => undefined}
    />
  </Provider>
);
