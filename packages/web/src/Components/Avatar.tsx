import React, { FunctionComponent } from 'react';
import MaterialAvatar, { AvatarProps as MaterialAvatarProps } from '@material-ui/core/Avatar';

import { withTheme } from '@material-ui/styles';
import { IAvatarSizes } from '@naturacosmeticos/natds-styles';

export type AvatarSizes = 'tiny' | 'small' | 'standard' | 'large' | 'xlarge';

interface IAvatarProps extends MaterialAvatarProps {
  size?: AvatarSizes;
  theme: any;
}

const Avatar: FunctionComponent<IAvatarProps> = (props: IAvatarProps) => {
  const style = withSizes(props.size, props.theme);

  return <MaterialAvatar {...props} {...style} />;
};

function withSizes(size: AvatarSizes | undefined = 'standard', theme: any = {}) {
  const { avatarSizes }: { avatarSizes: IAvatarSizes } = theme;
  if (!avatarSizes) return {};

  const value = avatarSizes[size];
  if (!value) return {};

  const sizeInPx = `${value}px`;

  return {
    style: {
      width: sizeInPx,
      height: sizeInPx
    }
  };
}

export default withTheme(Avatar);
