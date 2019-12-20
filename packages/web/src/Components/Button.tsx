import React, { FunctionComponent } from 'react';
import { withTheme } from '@material-ui/styles';
import MaterialButton, {
  ButtonProps as IButtonProps,
} from '@material-ui/core/Button';
export { ButtonProps as IButtonProps } from '@material-ui/core/Button';

export const Button: FunctionComponent<Omit<IButtonProps, 'translate'>> = (
  props: Omit<IButtonProps, 'translate'>
) => {
  return <MaterialButton {...props} />;
};

export default withTheme(Button);
