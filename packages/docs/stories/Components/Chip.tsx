import * as React from 'react';
import { Chip } from '@natds/web';

export default {
  title: 'Components|Chip',
  component: Chip
};

export const WithDeleteAction = () => (
  <Chip label="Some Label" onDelete={() => {}} />
);
