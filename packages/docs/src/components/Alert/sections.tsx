import * as React from 'react';
import { Alert, AlertTitle } from '@naturacosmeticos/natds-web';

export const variantSeverities = [
  {
    title: 'Standard and Success',
    component: <Alert variant="standard" severity="success"><AlertTitle>Title</AlertTitle>Body</Alert>
  },
  {
    title: 'Standard and Error',
    component: <Alert variant="standard" severity="error"><AlertTitle>Title</AlertTitle>Body</Alert>
  },
  {
    title: 'Standard and Warning',
    component: <Alert variant="standard" severity="warning"><AlertTitle>Title</AlertTitle>Body</Alert>
  },
  {
    title: 'Standard and Info',
    component: <Alert variant="standard" severity="info"><AlertTitle>Title</AlertTitle>Body</Alert>
  },
  {
    title: 'Filled and Success',
    component: <Alert variant="filled" severity="success"><AlertTitle>Title</AlertTitle>Body</Alert>
  },
  {
    title: 'Filled and Error',
    component: <Alert variant="filled" severity="error"><AlertTitle>Title</AlertTitle>Body</Alert>
  },
  {
    title: 'Filled and Warning',
    component: <Alert variant="filled" severity="warning"><AlertTitle>Title</AlertTitle>Body</Alert>
  },
  {
    title: 'Filled and Info',
    component: <Alert variant="filled" severity="info"><AlertTitle>Title</AlertTitle>Body</Alert>
  },
  {
    title: 'Outlined and Success',
    component: <Alert variant="outlined" severity="success"><AlertTitle>Title</AlertTitle>Body</Alert>
  },
  {
    title: 'Outlined and Error',
    component: <Alert variant="outlined" severity="error"><AlertTitle>Title</AlertTitle>Body</Alert>
  },
  {
    title: 'Outlined and Warning',
    component: <Alert variant="outlined" severity="warning"><AlertTitle>Title</AlertTitle>Body</Alert>
  },
  {
    title: 'Outlined and Info',
    component: <Alert variant="outlined" severity="info"><AlertTitle>Title</AlertTitle>Body</Alert>
  }
];
