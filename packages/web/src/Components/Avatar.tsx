import React, { FunctionComponent } from 'react';
import MaterialAvatar, { AvatarProps as MaterialAvatarProps } from '@material-ui/core/Avatar';
import { withTheme } from '@material-ui/styles';
import { IAvatarSizes } from '@naturacosmeticos/natds-styles';
import { IThemeWeb } from 'Themes';

export type AvatarSizes = 'tiny' | 'small' | 'standard' | 'large' | 'xlarge';
export type AvatarColors = 'primary' | 'secondary' | string;

export interface IAvatarProps extends MaterialAvatarProps {
  size?: AvatarSizes;
  color?: AvatarColors;
  theme: IThemeWeb | unknown;
}

const Avatar: FunctionComponent<IAvatarProps> = (props: IAvatarProps) => {
  const style = {
    ...withSizes(props.size, props.theme),
    ...withColors(props.color, props.theme)
  };

  return <MaterialAvatar {...props} style={style} />;
};

function withSizes(size: AvatarSizes | undefined = 'standard', theme: any = {}) {
  const { avatarSizes }: { avatarSizes: IAvatarSizes } = theme;

  if (!avatarSizes) return {};

  const value = avatarSizes[size];
  const sizeInPx = `${value.size}px`;

  return {
    width: sizeInPx,
    height: sizeInPx,
    fontSize: value.fontSize
  };
}

function withColors(color: AvatarColors | undefined = 'primary', theme: any = {}) {
  const { palette = {} }: { palette: object } = theme;
  const selectedColor = palette[color];

  if (!selectedColor) return {};

  return {
    background: selectedColor.main
  };
}

export default withTheme(Avatar);
