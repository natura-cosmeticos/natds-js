import * as React from 'react';

import Colors from './Colors.component';

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

const PRIMARY = [colorTokens[0], colorTokens[1]];
const SECONDARY = [colorTokens[2], colorTokens[3]];
const BRAND = [colorTokens[8], colorTokens[9], colorTokens[10]];
const OTHERS = [colorTokens[4], colorTokens[5], colorTokens[6], colorTokens[7]];

export default {
  title: 'Tokens|Colors'
};

export const All = () => (
  <Colors colors={colorTokens} />
);

export const Primary = () => (
  <Colors colors={PRIMARY} />
);

export const Secondary = () => (
  <Colors colors={SECONDARY} />
);

export const Brand = () => (
  <Colors colors={BRAND} />
);

export const Others = () => (
  <Colors colors={OTHERS} />
);
