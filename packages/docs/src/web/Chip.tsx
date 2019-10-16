import * as React from 'react';
import { Chip } from '@natds/web';
import withJest from '../decorators/jest';

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
  <Chip
    label="Some Label"
    onDelete={() => { }}
    clickable={true}
  />
);
