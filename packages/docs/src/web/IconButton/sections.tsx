import React, { useState } from 'react';
import { IconButton, Icon, ToggleButton } from '@naturacosmeticos/natds-web';

const getIcon = (props: any = {}) => (
  <Icon name="outlined-alert-check" size="small" {...props} />
);

export const colors = [
  {
    title: 'Primary',
    component: <IconButton color="primary" children={getIcon()} />
  },
  {
    title: 'Secondary',
    component: <IconButton color="secondary" children={getIcon()} />
  },
  {
    title: 'Default',
    component: <IconButton color="default" children={getIcon()} />
  }
];

export const sizes = [
  {
    title: 'Small with tiny icon',
    component: <IconButton color="primary" size="small" children={getIcon({ size: 'tiny' })} />
  },
  {
    title: 'Small with small icon',
    component: <IconButton color="primary" size="small" children={getIcon()} />
  },
  {
    title: 'Medium with small icon',
    component: <IconButton color="primary" size="medium" children={getIcon()} />
  },
  {
    title: 'Medium with standard icon',
    component: <IconButton color="primary" size="medium" children={getIcon({ size: 'standard' })} />
  }
];

export const attributes = [
  {
    title: 'Disabled',
    component: <IconButton color="primary" children={getIcon()} disabled />
  }
];
