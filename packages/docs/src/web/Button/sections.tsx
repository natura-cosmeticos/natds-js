import React from 'react';
import { Button } from '@naturacosmeticos/natds-web';
import Favorite from '@material-ui/icons/Favorite';

export const attributes = [
  {
    title: 'Enabled',
    component: <Button color="primary" variant="contained" size="medium">Label</Button>
  },
  {
    title: 'Disabled',
    component: <Button color="primary" variant="contained" size="medium" disabled>Label</Button>
  },
  {
    title: 'Start Icon',
    component: <Button color="primary" variant='contained' size="medium" startIcon={<Favorite />}>Label</Button>
  },
  {
    title: 'End Icon',
    component: <Button color="primary" variant="contained" size="medium" endIcon={<Favorite />}>Label</Button>
  }
];

export const variants = [
  {
    title: 'Contained',
    component: <Button color="primary" variant="contained" size="medium">Label</Button>
  },
  {
    title: 'Outlined',
    component: <Button color="primary" variant="outlined" size="medium">Label</Button>
  },
  {
    title: 'Text',
    component: <Button color="primary" variant='text' size="medium">Label</Button>
  }
];

export const colors = [
  {
    title: 'Primary',
    component: <Button color="primary" variant="contained" size="medium">Label</Button>
  },
  {
    title: 'Secondary',
    component: <Button color="secondary" variant="contained" size="medium">Label</Button>
  },
  {
    title: 'Default',
    component: <Button color="default" variant='contained' size="medium">Label</Button>
  }
];

export const sizes = [
  {
    title: 'Small',
    component: <Button color="primary" variant="contained" size="small">Label</Button>
  },
  {
    title: 'Medium',
    component: <Button color="primary" variant="contained" size="medium">Label</Button>
  },
  {
    title: 'Large',
    component: <Button color="primary" variant='contained' size="large">Label</Button>
  }
];
