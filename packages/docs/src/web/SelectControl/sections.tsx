import React from 'react';
import { Switch } from '@naturacosmeticos/natds-web';

export const colors = [
  {
    title: 'Primary',
    component: <Switch color="primary" checked={true} />,
  },
  {
    title: 'Secondary',
    component: <Switch color="secondary" checked={true} />,
  },
  {
    title: 'Default',
    component: <Switch color="default" checked={true} />,
  },
];

export const attributes = [
  {
    title: 'Enabled',
    component: (
      <>
        <Switch checked={false} />
        <Switch checked />
      </>
    ),
  },
  {
    title: 'Disabled',
    component: (
      <>
        <Switch disabled checked={false} />
        <Switch disabled checked />
      </>
    ),
  },
];
