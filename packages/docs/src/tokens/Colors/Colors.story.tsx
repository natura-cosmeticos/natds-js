import * as React from 'react';

import Colors, { typesEnum } from './Colors.component';

const colorTokens = [
  {
    id: 'primary',
    name: 'Primary'
  },
  {
    id: 'primary_variants',
    name: 'Primary variants'
  },
  {
    id: 'secondary',
    name: 'Secondary'
  },
  {
    id: 'secondary_variants',
    name: 'Secondary variants'
  },
  {
    id: 'surface_and_background',
    name: 'Surface and Backgrounds'
  },
  {
    id: 'content',
    name: 'Content'
  },
  {
    id: 'feedback',
    name: 'Feedback'
  },
  {
    id: 'levels_cn',
    name: 'Levels CN'
  },
  {
    id: 'natura_brand_primary',
    name: 'Natura Brand Primary'
  },
  {
    id: 'natura_brand_secondary',
    name: 'Natura Brand Secondary'
  },
  {
    id: 'natura_brand_complement',
    name: 'Natura Brand Complement'
  }
];

export default {
  title: 'Tokens|Colors',
  parameters: { docs: { page: () => (<Colors colors={colorTokens} type={typesEnum.table} />) } }
};

export const All = () => (
  <Colors colors={colorTokens} type={typesEnum.thumb} />
);
