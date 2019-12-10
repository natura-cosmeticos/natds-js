import React, { FunctionComponent } from 'react';
import MaterialGrid, { GridProps as IGridContainerProps } from '@material-ui/core/Grid';
export { GridProps as IGridContainerProps } from '@material-ui/core/Grid';

const GridContainer: FunctionComponent<IGridContainerProps> = (props: IGridContainerProps) => {
  return <MaterialGrid {...props} container />;
};

export default GridContainer;
