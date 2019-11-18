import React, { FunctionComponent } from 'react';

import MaterialButton, { ButtonProps } from '@material-ui/core/Button';
import { withTheme } from '@material-ui/styles';

const Button: FunctionComponent<ButtonProps> = (props: ButtonProps) => {
  return <MaterialButton {...props} />;
};

export default withTheme(Button);
