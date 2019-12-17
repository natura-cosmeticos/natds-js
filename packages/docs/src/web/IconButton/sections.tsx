import React from 'react';
import { IconButton, Icon } from '@naturacosmeticos/natds-web';

const icon = <Icon name="outlined-alert-check" size="small" />;

export const colors = [
  {
    title: 'Enabled',
    component: <IconButton color="primary" children={icon} />
  },
  {
    title: 'Disabled',
    component: <IconButton color="secondary" children={icon} />
  },
  {
    title: 'Start Icon',
    component: <IconButton color="default" children={icon} />
  }
];

export const sizes = [
  {
    title: 'Small with tiny icon',
    component: <IconButton color="primary" size="small" children={<Icon name="outlined-alert-check" size="tiny" />} />
  },
  {
    title: 'Small with small icon',
    component: <IconButton color="primary" size="small" children={icon} />
  },
  {
    title: 'Medium with small icon',
    component: <IconButton color="primary" size="medium" children={icon} />
  },
  {
    title: 'Medium with standard icon',
    component: <IconButton color="primary" size="medium" children={<Icon name="outlined-alert-check" size="standard" />} />
  }
];

export const attributes = [
  {
    title: 'Standard',
    component: <IconButton color="primary" children={icon} />
  },
  {
    title: 'Disabled',
    component: <IconButton color="primary" children={icon} disabled />
  }
];
