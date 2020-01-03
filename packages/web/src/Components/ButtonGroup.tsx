import React, { FunctionComponent } from 'react';
import { withTheme } from '@material-ui/styles';
import MaterialButtonGroup, { ButtonGroupProps as IButtonGroupProps } from '@material-ui/core/ButtonGroup';
export { ButtonGroupProps as IButtonGroupProps } from '@material-ui/core/ButtonGroup';

export const ButtonGroup: FunctionComponent<IButtonGroupProps> = (props: IButtonGroupProps) => {
  return (
    <MaterialButtonGroup {...props} />
  );
};

export default withTheme(ButtonGroup);
