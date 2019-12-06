import React, { FunctionComponent } from 'react';

import MaterialCheckbox, { CheckboxProps } from '@material-ui/core/Checkbox';
import { withTheme } from '@material-ui/styles';

const Checkbox: FunctionComponent<Omit<CheckboxProps, 'translate'>> = (
  props: Omit<CheckboxProps, 'translate'>
) => {
  return <MaterialCheckbox {...props} />;
};

export default withTheme(Checkbox);
