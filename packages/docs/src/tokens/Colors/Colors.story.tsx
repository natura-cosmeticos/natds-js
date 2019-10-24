import * as React from 'react';
import { tokens } from '@naturacosmeticos/natds-styles';
import Colors, { typesEnum } from './Colors.component';

const { natura } = tokens;

export default {
  title: 'Design Tokens|Colors',
  parameters: { docs: { page: () => (<Colors colors={natura} type={typesEnum.table} />) } }
};

export const Natura = () => (
  <Colors colors={natura} type={typesEnum.thumb} />
);
