import React from 'react';
import { Icon } from '@naturacosmeticos/natds-web';
import { iconNames } from '@naturacosmeticos/natds-icons';

console.log(iconNames)
export const types = Object.keys(iconNames).map(name => ({
  title: name,
  component: <Icon name={name} />
}));
