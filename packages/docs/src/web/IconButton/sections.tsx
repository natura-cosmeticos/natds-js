import React, { useState } from 'react';
import { IconButton, Icon } from '@naturacosmeticos/natds-web';

const getIcon = (props: any = {}) => (
  <Icon name="outlined-alert-check" size="small" {...props} />
);

const ToggleButton = () => {
  const [selected, onToggle] = useState(false);

  return (
    <IconButton
      children={selected ? getIcon({ name: 'filled-alert-check' }) : getIcon({ name: 'outlined-alert-check' })}
      color="primary"
      onClick={() => onToggle(!selected)}
    />
  );
};

export const colors = [
  {
    title: 'Enabled',
    component: <IconButton color="primary" children={getIcon()} />
  },
  {
    title: 'Disabled',
    component: <IconButton color="secondary" children={getIcon()} />
  },
  {
    title: 'Start Icon',
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
    title: 'Standard',
    component: <IconButton color="primary" children={getIcon()} />
  },
  {
    title: 'Disabled',
    component: <IconButton color="primary" children={getIcon()} disabled />
  }
];

export const custom = [
  {
    title: 'Toggle',
    component: <ToggleButton />
  }
];
