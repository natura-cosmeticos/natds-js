import React from 'react';
import { CircularProgress } from '@naturacosmeticos/natds-web';

export const colors = [
  {
    title: 'Primary',
    component: (
      <CircularProgress color="primary" />
    ),
  },
  {
    title: 'Secondary',
    component: (
      <CircularProgress color="secondary" />
    ),
  },
  {
    title: 'Default',
    component: (
      <CircularProgress color="inherit" />
    ),
  },
];

export const variants = [
  {
    title: 'Determinate',
    component: <CircularProgress color="primary" variant="determinate" value={70} />
  },
  {
    title: 'Indeterminate',
    component: <CircularProgress color="primary" variant="indeterminate" />
  },
  {
    title: 'Static',
    component: <CircularProgress color="primary" variant="static" />
  },
]