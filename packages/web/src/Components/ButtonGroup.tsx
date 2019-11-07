import React, { FunctionComponent } from 'react';

import MaterialButtonGroup, { ButtonGroupProps } from '@material-ui/core/ButtonGroup';
import { withTheme } from '@material-ui/styles';

const ButtonGroup: FunctionComponent<ButtonGroupProps> = (props: ButtonGroupProps) => {
  return (
    <MaterialButtonGroup {...props} />
  );
};

export default withTheme(ButtonGroup);
