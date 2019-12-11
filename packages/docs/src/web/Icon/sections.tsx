import React from 'react';
import { Icon } from '@naturacosmeticos/natds-web';
import { iconNames } from '@naturacosmeticos/natds-icons';
import { tokens } from '@naturacosmeticos/natds-styles';

const iconList = Object.keys(iconNames);
const iconSizes = Object.keys(tokens.iconSizes);

function getListByType(type: string): string[] {
  return iconList.filter((icon) => icon.split('-')[0] === type);
}

function buildConfig(type: string) {
  const list = getListByType(type);

  return list.map((name: string) => ({
    title: name,
    component: <Icon name={name} />
  }));
}

function buildConfigSizes(type: string) {
  const [name] = getListByType(type);

  return iconSizes.map((size: string) => ({
    title: size,
    component: <Icon name={name} size={size} />
  }));
}

export const outlined = buildConfig('outlined');
export const filled = buildConfig('filled');
export const sizes = buildConfigSizes('outlined');
