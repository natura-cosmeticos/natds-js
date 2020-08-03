import React, { FunctionComponent, forwardRef } from "react";
import MaterialAvatar, { AvatarProps as MaterialAvatarProps } from "@material-ui/core/Avatar";
import { withTheme } from "@material-ui/styles";
import { IAvatarSizes } from "@naturacosmeticos/natds-styles";
import { IThemeWeb } from "Themes";

export type AvatarSizes = keyof IAvatarSizes;
export type AvatarColors = "primary" | "secondary" | "default" | string;

export interface IAvatarProps extends MaterialAvatarProps {

  /**
   * @optional
   * @default 'standard'
   * Size of the Avatar
   */
  size?: AvatarSizes;

  /**
   * @optional
   * @default 'primary'
   * Color of the Avatar
   */
  color?: AvatarColors;
  theme: IThemeWeb | unknown;
}

const withSizes = (size: AvatarSizes | undefined,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  theme: any = {}) => {

  if (!size) {
    return {};
  }

  const { avatarSizes }: { avatarSizes: IAvatarSizes } = theme;

  if (!avatarSizes) {
    return {};
  }

  const value = avatarSizes[size],
    sizeInPx = `${value.size}px`;

  return {
    fontSize: value.fontSize,
    height: sizeInPx,
    width: sizeInPx,
  };
};

const withColors = (color: AvatarColors | undefined,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  theme: any = {}) => {

  if (!color) {
    return {};
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { palette = {} }: { palette: any } = theme,

    selectedColor = palette[color];

  if (!selectedColor || color === "default") {
    return {};
  }

  return {
    background: selectedColor.main,
    color: selectedColor.contrastText,
  };
};

export const Avatar: FunctionComponent<IAvatarProps> = forwardRef((
  props: IAvatarProps,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ref: any,
) => {
  const style = {
    ...withSizes(props.size, props.theme),
    ...withColors(props.color, props.theme),
    ...props.style,
  };

  return <MaterialAvatar {...props} style={style} ref={ref} />;
});

Avatar.displayName = "Avatar";

export default withTheme(Avatar);
