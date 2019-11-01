import React, { FunctionComponent } from 'react';

import MaterialGrid, { GridProps } from '@material-ui/core/Grid';
import { withTheme } from '@material-ui/styles';

const Grid: FunctionComponent<GridProps> = (props: GridProps) => {
  return <MaterialGrid {...props} />;
};

export default withTheme(Grid);
