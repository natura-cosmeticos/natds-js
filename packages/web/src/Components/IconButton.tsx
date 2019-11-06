import React, { FunctionComponent } from 'react';

import MaterialIconButton, { IconButtonProps } from '@material-ui/core/IconButton';
import { withTheme } from '@material-ui/styles';

const IconButton: FunctionComponent<IconButtonProps> = (props: IconButtonProps) => {
  return (
    <MaterialIconButton {...props} />
  );
};

export default withTheme(IconButton);
