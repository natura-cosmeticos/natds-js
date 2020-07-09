import {IIconSizes, ITheme} from "@naturacosmeticos/natds-styles";

/**
 * @see https://material-ui.com/pt/styles/api/#createstyles-styles-styles
 */
export const getFontSize = ({ size = 'standard', theme }: {size?: keyof IIconSizes, theme: ITheme}) => {
  const { iconSizes = {} } = theme || {};
  const fontSize = iconSizes[String(size)];
  return `${fontSize}px`;
};
