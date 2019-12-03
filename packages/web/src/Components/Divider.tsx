import React, { FunctionComponent } from 'react';

import MaterialDivider, { DividerProps } from '@material-ui/core/Divider';
import { withTheme } from '@material-ui/styles';

const Divider: FunctionComponent<DividerProps> = (props: DividerProps) => {
  return <MaterialDivider {...props} />;
};

export default withTheme(Divider);
