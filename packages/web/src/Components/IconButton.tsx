import React, { FunctionComponent } from 'react';
import { withTheme } from '@material-ui/styles';
import MaterialIconButton, {
  IconButtonProps as IIconButtonProps,
} from '@material-ui/core/IconButton';
export { IconButtonProps as IIconButtonProps } from '@material-ui/core/IconButton';

export const IconButton: FunctionComponent<Omit<IIconButtonProps,'translate'>> = (
  props: Omit<IIconButtonProps, 'translate'>
) => {
  return <MaterialIconButton {...props} />;
};

export default withTheme(IconButton);
