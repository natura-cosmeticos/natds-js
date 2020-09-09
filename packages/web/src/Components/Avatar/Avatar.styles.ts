import createStyles from "@material-ui/core/styles/createStyles";
import { IAvatarProperties } from "@naturacosmeticos/natds-styles";
import { StyleRules } from "@material-ui/core";
import { AvatarColor, AvatarSize } from "./Avatar.props";
import { IThemeWeb } from "../../Themes";

type AvatarStylesArgs = {
  color?: AvatarColor,
  size?: AvatarSize,
  theme: IThemeWeb
};

type AvatarFallbackStyles = {
  color: string,
  fill: string
};

type AvatarRootStyles = {
  backgroundColor: string,
  color: string,
  fontSize: IAvatarProperties["fontSize"],
  height: IAvatarProperties["size"],
  width: IAvatarProperties["size"]
}

type AvatarStyles = {
  fallback: AvatarFallbackStyles,
  root: AvatarRootStyles
}

export const getStylesForColor: ({ color, theme }: AvatarStylesArgs) => AvatarStyles = ({ color, theme }) => {

  const fallback = {} as AvatarFallbackStyles;
  const root = {} as AvatarRootStyles;

  const { palette } = theme;

  if (color && color !== "default" && palette && palette[color]) {
    root.backgroundColor = palette[color].main;
    root.color = palette[color].contrastText;
    fallback.color = palette[color].contrastText;
    fallback.fill = palette[color].contrastText;
  }

  return { fallback, root } as AvatarStyles;

};

const getStylesForSize: ({ size, theme }: AvatarStylesArgs) => AvatarStyles = ({ size, theme }) => {

  const fallback = {} as AvatarFallbackStyles;
  const root = {} as AvatarRootStyles;

  const { avatarSizes } = theme;

  if (size && avatarSizes && avatarSizes[size]) {
    root.fontSize = avatarSizes[size].fontSize;
    root.height = avatarSizes[size].size;
    root.width = avatarSizes[size].size;
  }

  return { fallback, root } as AvatarStyles;

};

export const styles : ({ color, size, theme }: AvatarStylesArgs) => StyleRules<"root" | "fallback"> = ({ color, size, theme }) => {

  const colorStyles = getStylesForColor({ color, theme });
  const sizeStyles = getStylesForSize({ size, theme });

  return createStyles({
    root: {
      ...colorStyles.root,
      ...sizeStyles.root,
    },
    fallback: {
      ...colorStyles.fallback,
      ...sizeStyles.fallback,
    },
  });
};

export default styles;
