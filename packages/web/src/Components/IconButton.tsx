import React, { FunctionComponent, forwardRef } from 'react';
import { withTheme } from '@material-ui/styles';
import MaterialIconButton, {
  IconButtonProps as IIconButtonProps
} from '@material-ui/core/IconButton';
export { IconButtonProps as IIconButtonProps } from '@material-ui/core/IconButton';

export const IconButton: FunctionComponent<IIconButtonProps> = forwardRef((
  props: IIconButtonProps,
  ref: any
) => <MaterialIconButton {...props} ref={ref} />);

export default withTheme(IconButton);
