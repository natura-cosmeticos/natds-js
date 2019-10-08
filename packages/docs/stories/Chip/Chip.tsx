import React from 'react';
import { Chip } from '@natds/web';

export default { title: 'Chip' };

export const withText = () => (
  <Chip labelOn="On" labelOff="off" />
);
