import React from 'react';
import { Icon } from '@naturacosmeticos/natds-web';
import { iconNames } from '@naturacosmeticos/natds-icons';
import { tokens } from '@naturacosmeticos/natds-styles';

const iconList: any = Object.keys(iconNames);
const iconSizes: any = Object.keys(tokens.iconSizes);

function getListByType(type: string): string[] {
  return iconList.filter((icon) => icon.split('-')[0] === type);
}

function buildConfigSizes(type: string) {
  const [name]: any = getListByType(type);

  return iconSizes.map((size: any) => ({
    title: size,
    component: <Icon name={name} size={size} />
  }));
}

export const sizes = buildConfigSizes('outlined');
