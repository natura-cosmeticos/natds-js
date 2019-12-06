import React from 'react';
import { Checkbox, Switch } from '@naturacosmeticos/natds-web';

export const colors = [
  {
    title: 'Primary',
    component: (
      <>
        <Checkbox color="primary" checked={true} />
        <Switch color="primary" checked={true} />
      </>
    ),
  },
  {
    title: 'Secondary',
    component: (
      <>
        <Checkbox color="secondary" checked={true} />
        <Switch color="secondary" checked={true} />
      </>
    ),
  },
  {
    title: 'Default',
    component: (
      <>
        <Checkbox color="default" checked={true} />
        <Switch color="default" checked={true} />
      </>
    ),
  },
];

export const attributes = [
  {
    title: 'Enabled',
    component: (
      <>
        <Checkbox checked={false} />
        <Checkbox checked />
        <Switch checked={false} />
        <Switch checked />
      </>
    ),
  },
  {
    title: 'Disabled',
    component: (
      <>
        <Checkbox disabled checked={false} />
        <Checkbox disabled checked />
        <Switch disabled checked={false} />
        <Switch disabled checked />
      </>
    ),
  },
];
