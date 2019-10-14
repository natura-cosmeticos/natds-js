import * as React from 'react';
import { Chip } from '@natds/web';
import Button from '@natds/mobile/dist/Components/Button';

export default {
  title: 'Components|Chip',
  component: Chip
};

export const WithDeleteAction = () => (
  <Chip label="Some Label" onDelete={() => {}} />
);

export const Native = () => <Button />;
