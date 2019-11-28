import React from 'react';
import { TextField, Provider, themes } from '@naturacosmeticos/natds-web';

export const types = [
  {
    title: 'Standard',
    component: <TextField label="Label" helpText="Assistive text" placeholder="Placeholder" />
  },
  {
    title: 'Search',
    component: <TextField label="Label" helpText="Assistive text" placeholder="Placeholder" type="search" />
  },
  {
    title: 'Password',
    component: <TextField label="Label" helpText="Assistive text" placeholder="Placeholder" type="password" />
  },
  {
    title: 'Multiline',
    component: <TextField label="Label" helpText="Assistive text" placeholder="Placeholder" multiline rows="4" />
  }
];

export const states = [
  {
    title: 'Standard',
    component: <TextField label="Label" helpText="Assistive text" placeholder="Placeholder" />
  },
  {
    title: 'Filled',
    component: <TextField label="Label" helpText="Assistive text" placeholder="Placeholder" value="Hello World" />
  },
  {
    title: 'Success',
    component: <TextField label="Label" helpText="Assistive text" placeholder="Placeholder" state="success" />
  },
  {
    title: 'Error',
    component: <TextField label="Label" helpText="Assistive text" placeholder="Placeholder" state="error" />
  }
];

export const attributes = [
  {
    title: 'Required',
    component: <TextField label="Label" helpText="Assistive text" placeholder="Placeholder" required />
  },
  {
    title: 'Disabled',
    component: <TextField label="Label" helpText="Assistive text" placeholder="Placeholder" disabled />
  },
  {
    title: 'Readonly',
    component: <TextField label="Label" helpText="Assistive text" placeholder="Placeholder" readOnly />
  },
  {
    title: 'Readonly Filled',
    component: <TextField label="Label" helpText="Assistive text" placeholder="Placeholder" readOnly value="Hello World" />
  },
  {
    title: 'Without helper text',
    component: <TextField label="Label" placeholder="Placeholder" />
  }
];
