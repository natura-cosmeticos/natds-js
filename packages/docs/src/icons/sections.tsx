import React from "react";
import { iconNames } from "@naturacosmeticos/natds-icons";
import { IComponentWithLabelItem } from "@addons/ComponentWithLabel";

const iconList = Object.keys(iconNames);

export const getListByType = (type: string): string[] => iconList.filter((icon) => icon.split("-")[0] === type);

const buildConfig = (type: string) => {
  const list = getListByType(type);

  return list.map(buildConfigItem);
};

// @todo refactor(docs): adopt <Icon /> component instead of <i /> on buildConfigItem
const buildConfigItem = (name: string): IComponentWithLabelItem => ({
  title: name,
  component: <i className={`natds-icons natds-icons-2x natds-icons-${String(name)}`} />,
});

export const outlined = buildConfig("outlined");
export const filled = buildConfig("filled");
