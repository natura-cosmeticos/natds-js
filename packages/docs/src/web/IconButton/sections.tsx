import React from 'react';
import { IconButton } from '@naturacosmeticos/natds-web';
import Favorite from '@material-ui/icons/Favorite';

export const colors = [
  {
    title: 'Enabled',
    component: <IconButton color="primary" children={<Favorite />} />
  },
  {
    title: 'Disabled',
    component: <IconButton color="secondary" children={<Favorite />} />
  },
  {
    title: 'Start Icon',
    component: <IconButton color="default" children={<Favorite />} />
  }
];

export const sizes = [
  {
    title: 'Small',
    component: <IconButton color="primary" size="small" children={<Favorite />} />
  },
  {
    title: 'Medium',
    component: <IconButton color="primary" size="medium" children={<Favorite />} />
  }
];

export const attributes = [
  {
    title: 'Standard',
    component: <IconButton color="primary" children={<Favorite />} />
  },
  {
    title: 'Disabled',
    component: <IconButton color="primary" children={<Favorite />} disabled />
  }
];
