import * as React from 'react';
import { Chip } from '../../../../packages/web/dist/index';
// import web from '@natds/web';

export default { title: 'Chip' };

export const withText = () => (
  <Chip labelOn="On" labelOff="off" />
);
