import * as React from 'react';
import { Chip } from '@natds/web';

export default { title: 'Elements|Chip' };

export const Default = () => (
  <Chip labelOn="On" labelOff="off" />
);

export const withText = () => (
  <Chip labelOn="ble" labelOff="bla" />
);
