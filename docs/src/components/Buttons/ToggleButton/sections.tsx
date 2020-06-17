import React, { useState } from 'react';
import { ToggleButton, Icon } from '@naturacosmeticos/natds-web';

const getIcon = (name, props: any = {}) => (
  <Icon name={name} size="small" {...props} />
);

export const colors = [
  {
    title: 'Primary',
    component: <ToggleButton color="primary" iconOn={getIcon('filled-action-cancel')} iconOff={getIcon('outlined-navigation-close')} />
  },
  {
    title: 'Secondary',
    component: <ToggleButton color="secondary" iconOn={getIcon('filled-action-cancel')} iconOff={getIcon('outlined-navigation-close')} />
  },
  {
    title: 'Default',
    component: <ToggleButton color="default" iconOn={getIcon('filled-action-cancel')} iconOff={getIcon('outlined-navigation-close')} />
  }
];

export const sizes = [
  {
    title: 'Small with tiny icon',
    component: <ToggleButton color="primary" size="small" iconOn={getIcon('filled-action-cancel', { size: 'tiny' })} iconOff={getIcon('outlined-navigation-close', { size: 'tiny' })}  />
  },
  {
    title: 'Small with small icon',
    component: <ToggleButton color="primary" size="small" iconOn={getIcon('filled-action-cancel')} iconOff={getIcon('outlined-navigation-close')} />
  },
  {
    title: 'Medium with tiny icon',
    component: <ToggleButton color="primary" size="medium" iconOn={getIcon('filled-action-cancel', { size: 'tiny' })} iconOff={getIcon('outlined-navigation-close', { size: 'tiny' })} />
  },
  {
    title: 'Medium with small icon',
    component: <ToggleButton color="primary" size="medium" iconOn={getIcon('filled-action-cancel')} iconOff={getIcon('outlined-navigation-close')} />
  }
];

export const attributes = [
  {
    title: 'Disabled',
    component: <ToggleButton color="primary" iconOn={getIcon('filled-action-cancel')} iconOff={getIcon('outlined-navigation-close')} disabled />
  }
];
