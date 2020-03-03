import React from 'react';
import { LinearProgress } from '@naturacosmeticos/natds-web';

export const colors = [
  {
    title: 'Primary',
    component: <LinearProgress color="primary" />,
  },
  {
    title: 'Secondary',
    component: <LinearProgress color="secondary" />,
  },
];

export const variants = [
  {
    title: 'Determinate',
    component: (
      <LinearProgress color="primary" variant="determinate" value={70} />
    ),
  },
  {
    title: 'Indeterminate',
    component: <LinearProgress color="primary" variant="indeterminate" />,
  },
  {
    title: 'Buffer',
    component: (
      <LinearProgress
        color="primary"
        variant="buffer"
        valueBuffer={50}
        value={35}
      />
    ),
  },
  {
    title: 'Query',
    component: <LinearProgress color="primary" variant="query" value={75} />,
  },
];
