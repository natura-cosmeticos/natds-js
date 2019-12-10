import React, { FunctionComponent } from 'react';
import { withTheme } from '@material-ui/styles';
import MaterialButton, { ButtonProps as IButtonProps } from '@material-ui/core/Button';
export { ButtonProps as IButtonProps } from '@material-ui/core/Button';

const Button: FunctionComponent<IButtonProps> = (props: IButtonProps) => {
  return <MaterialButton {...props} />;
};

export default withTheme(Button);
