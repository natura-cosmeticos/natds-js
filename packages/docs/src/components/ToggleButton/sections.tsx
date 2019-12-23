import React, { useState } from 'react';
import { ToggleButton, Icon } from '@naturacosmeticos/natds-web';

const getIcon = (name, props: any = {}) => (
  <Icon name={name} size="small" {...props} />
);

export const colors = [
  {
    title: 'Enabled',
    component: <ToggleButton color="primary" iconOn={getIcon('filled-alert-check')} iconOff={getIcon('outlined-alert-check')} />
  },
  {
    title: 'Disabled',
    component: <ToggleButton color="secondary" iconOn={getIcon('filled-alert-check')} iconOff={getIcon('outlined-alert-check')} />
  },
  {
    title: 'Start Icon',
    component: <ToggleButton color="default" iconOn={getIcon('filled-alert-check')} iconOff={getIcon('outlined-alert-check')} />
  }
];

export const sizes = [
  {
    title: 'Small with tiny icon',
    component: <ToggleButton color="primary" size="small" iconOn={getIcon('filled-alert-check', { size: 'tiny' })} iconOff={getIcon('outlined-alert-check', { size: 'tiny' })}  />
  },
  {
    title: 'Small with small icon',
    component: <ToggleButton color="primary" size="small" iconOn={getIcon('filled-alert-check')} iconOff={getIcon('outlined-alert-check')} />
  },
  {
    title: 'Medium with small icon',
    component: <ToggleButton color="primary" size="medium" iconOn={getIcon('filled-alert-check')} iconOff={getIcon('outlined-alert-check')} />
  },
  {
    title: 'Medium with standard icon',
    component: <ToggleButton color="primary" size="medium" iconOn={getIcon('filled-alert-check', { size: 'standard' })} iconOff={getIcon('outlined-alert-check', { size: 'standard' })} />
  }
];

export const attributes = [
  {
    title: 'Standard',
    component: <ToggleButton color="primary" iconOn={getIcon('filled-alert-check')} iconOff={getIcon('outlined-alert-check')} />
  },
  {
    title: 'Disabled',
    component: <ToggleButton color="primary" iconOn={getIcon('filled-alert-check')} iconOff={getIcon('outlined-alert-check')} disabled />
  }
];
