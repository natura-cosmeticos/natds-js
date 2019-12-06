import React from 'react';
import { Checkbox, Radio, Switch } from '@naturacosmeticos/natds-web';

export const colors = [
  {
    title: 'Primary',
    component: (
      <>
        <Checkbox color="primary" checked={true} />
        <Radio color="primary" checked={true} />
        <Switch color="primary" checked={true} />
      </>
    ),
  },
  {
    title: 'Secondary',
    component: (
      <>
        <Checkbox color="secondary" checked={true} />
        <Radio color="secondary" checked={true} />
        <Switch color="secondary" checked={true} />
      </>
    ),
  },
  {
    title: 'Default',
    component: (
      <>
        <Checkbox color="default" checked={true} />
        <Radio color="default" checked={true} />
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
        <Radio checked={false} />
        <Radio checked />
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
        <Radio disabled checked={false} />
        <Radio disabled checked />
        <Switch disabled checked={false} />
        <Switch disabled checked />
      </>
    ),
  },
];
