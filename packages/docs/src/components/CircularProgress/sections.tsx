import React from 'react';
import { CircularProgress } from '@naturacosmeticos/natds-web';

export const colors = [
  {
    title: 'Primary',
    component: <CircularProgress color="primary" />,
  },
  {
    title: 'Secondary',
    component: <CircularProgress color="secondary" />,
  },
  {
    title: 'Default',
    component: <CircularProgress color="inherit" />,
  },
];

export const variants = [
  {
    title: 'Determinate',
    component: (
      <CircularProgress color="primary" variant="determinate" value={70} />
    ),
  },
  {
    title: 'Indeterminate',
    component: <CircularProgress color="primary" variant="indeterminate" />,
  },
  {
    title: 'Static',
    component: <CircularProgress color="primary" variant="static" value={5} />,
  },
  {
    title: ' ',
    component: <CircularProgress color="primary" variant="static" value={25} />,
  },
  {
    title: ' ',
    component: <CircularProgress color="primary" variant="static" value={75} />,
  },
  {
    title: ' ',
    component: (
      <CircularProgress color="primary" variant="static" value={100} />
    ),
  },
];

export const disableShrink = [
  {
    title: 'Indeterminate',
    component: (
      <CircularProgress
        color="primary"
        variant="indeterminate"
        disableShrink={true}
      />
    ),
  },
];
