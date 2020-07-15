import React from 'react';
import { iconNames } from '@naturacosmeticos/natds-icons';
import { IComponentWithLabelItem } from '@addons/ComponentWithLabel';

const iconList = Object.keys(iconNames);

export function getListByType(type: string): string[] {
  return iconList.filter((icon) => icon.split('-')[0] === type);
}

export function buildConfig(type: string) {
  const list = getListByType(type);

  return list.map(buildConfigItem);
}

/**
 * @param name
 * @todo refactor(docs): adopt <Icon /> component instead of <i /> on buildConfigItem
 */
function buildConfigItem(name: string): IComponentWithLabelItem {
  return {
    title: name,
    component: <i className={`natds-icons natds-icons-2x natds-icons-${String(name)}`} />
  };
}

export const outlined = buildConfig('outlined');
export const filled = buildConfig('filled');
