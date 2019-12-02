import React from 'react';
import { TextField } from '@naturacosmeticos/natds-rn';


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
    component: <TextField label="Label" helpText="Assistive text" placeholder="Placeholder" multiline numberOfLines={4} />
  }
];


export const states = [
  {
    title: 'Standard',
    component: <TextField label="Label" helpText="Assistive text" placeholder="Placeholder" />
  },
  {
    title: 'Filled',
    component: <TextField label="Label" helpText="Assistive text" placeholder="Placeholder" defaultValue="Hello World" />
  },
  {
    title: 'Success',
    component: <TextField label="Label" helpText="Assistive text" placeholder="Placeholder" status="success" />
  },
  {
    title: 'Error',
    component: <TextField label="Label" helpText="Assistive text" placeholder="Placeholder" status="error" />
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
    component: <TextField label="Label" helpText="Assistive text" placeholder="Placeholder" editable={false} />
  },
  {
    title: 'Readonly Filled',
    component: <TextField label="Label" helpText="Assistive text" placeholder="Placeholder" editable={false} value="Hello World" />
  },
  {
    title: 'Without helper text',
    component: <TextField label="Label" placeholder="Placeholder" />
  },
  {
    title: 'Without label',
    component: <TextField helpText="Assistive text" placeholder="Placeholder" />
  }
];

export const sizes = [
  {
    title: 'Large',
    component: <TextField label="Label" size="large" placeholder="Placeholder" helpText="HelpText" />
  },
  {
    title: 'Medium',
    component: <TextField label="Label" size="medium" placeholder="Placeholder" helpText="HelpText" />
  }
];
