import {IIconSizes, ITheme} from "@naturacosmeticos/natds-styles";

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const getFontSize = ({ size = "standard", theme }: {size?: keyof IIconSizes, theme: ITheme}) => {
  const { iconSizes = {} } = theme || {},
    fontSize = iconSizes[String(size)];


  return `${fontSize}px`;
};
