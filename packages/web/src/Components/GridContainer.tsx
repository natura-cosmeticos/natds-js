import React, { FunctionComponent } from 'react';
import MaterialGrid, { GridProps } from '@material-ui/core/Grid';

const GridContainer: FunctionComponent<GridProps> = (props: GridProps) => {
  return <MaterialGrid {...props} container />;
};

export default GridContainer;
