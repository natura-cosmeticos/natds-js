import { IIconSizes } from "@naturacosmeticos/natds-styles";
import { IThemeWeb } from "../../Themes";

type IconFontSizeArgs = {
  size?: keyof IIconSizes,
  theme: IThemeWeb
}

export const getFontSize : ({ size, theme }: IconFontSizeArgs) => string = ({ size = "standard", theme }) => {
  const { iconSizes } = theme;

  /**
   * @todo fix TS7053: Element implicitly has an 'any' type, expression of type 'string' can't be used to index type {}
   */
  if (iconSizes && typeof iconSizes[size] !== "undefined") {

    const fontSize = iconSizes[size];

    return `${fontSize}px`;
  }

  return "1em";
};
