import * as React from "react";
import { iconNames } from "@naturacosmeticos/natds-icons";
import { tokens } from "@naturacosmeticos/natds-styles";
import Icon from ".";

const iconList: string[] = Object.keys(iconNames);
const iconSizes: string[] = Object.keys(tokens.iconSizes);

const getListByType = (type: string): string[] => iconList.filter((icon: string) => icon.split("-")[0] === type);

const buildConfigSizes = (type: string) => {
  const [name]: string[] = getListByType(type);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return iconSizes.map((size: any) => ({
    title: size,
    component: <Icon name={name} size={size} />,
  }));
};

export const sizes = buildConfigSizes("outlined");
