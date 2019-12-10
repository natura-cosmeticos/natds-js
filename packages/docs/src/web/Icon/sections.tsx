import React from 'react';
import { Icon, IIconProps } from '@naturacosmeticos/natds-web';
import { iconNames } from '@naturacosmeticos/natds-icons';

const iconList = Object.keys(iconNames);

function getListByType(type: string): IIconProps.name[] {
  return iconList.filter((icon) => icon.split('-')[0] === type);
}

function buildConfig(type: string) {
  const list = getListByType(type);

  return list.map((name: IIconProps.name) => ({
    title: name,
    component: <Icon name={name} />
  }));
}

export const outlined = buildConfig('outlined');
export const filled = buildConfig('filled');
