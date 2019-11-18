import React, { FunctionComponent } from 'react';

import MaterialAvatar, { AvatarProps } from '@material-ui/core/Avatar';
import { withTheme } from '@material-ui/styles';

const Avatar: FunctionComponent<AvatarProps> = (props: AvatarProps) => {
  return <MaterialAvatar {...props} />;
};

export default withTheme(Avatar);
