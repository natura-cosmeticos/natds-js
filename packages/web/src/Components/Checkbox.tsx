import React, { FunctionComponent } from 'react';
import { withTheme } from '@material-ui/styles';
import MaterialCheckbox, { CheckboxProps as ICheckboxProps } from '@material-ui/core/Checkbox';
export { CheckboxProps as ICheckboxProps } from '@material-ui/core/Checkbox';

export const Checkbox: FunctionComponent<Omit<ICheckboxProps, 'translate'>> = (
  props: Omit<ICheckboxProps, 'translate'>
) => {
  return <MaterialCheckbox {...props} />;
};

export default withTheme(Checkbox);
