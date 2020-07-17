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

export const Avatar: FunctionComponent<IAvatarProps> = forwardRef((
  props: IAvatarProps,
  ref: any
) => {
  const style = {
    ...withSizes(props.size, props.theme),
    ...withColors(props.color, props.theme),
    ...props.style
  };

  return <MaterialAvatar {...props} style={style} ref={ref} />;
});

const withSizes = (size: AvatarSizes | undefined, theme: any = {}) => {

    /**
     * @todo Fix `no-unused-expression` detected by tslint
     */
    // tslint:disable-next-line:no-unused-expression
    if (!size) {
      return {};
    }

    const { avatarSizes }: { avatarSizes: IAvatarSizes } = theme;

    /**
     * @todo Fix `no-unused-expression` detected by tslint
     */
    // tslint:disable-next-line:no-unused-expression
    if (!avatarSizes) {
      return {};
    }

    const value = avatarSizes[size],
      sizeInPx = `${value.size}px`;

    return {
      "fontSize": value.fontSize,
      "height": sizeInPx,
      "width": sizeInPx
    };
  },

  withColors = (color: AvatarColors | undefined, theme: any = {}) => {

    /**
     * @todo Fix `no-unused-expression` detected by tslint
     */
    // tslint:disable-next-line:no-unused-expression
    if (!color) {
      return {};
    }

    const { palette = {} }: { palette: any } = theme,

      selectedColor = palette[color];

    /**
     * @todo Fix `no-unused-expression` detected by tslint
     */
    // tslint:disable-next-line:no-unused-expression
    if (!selectedColor || color === "default") {
      return {};
    }

    return {
      "background": selectedColor.main,
      "color": selectedColor.contrastText
    };
  };

export default withTheme(Avatar);
