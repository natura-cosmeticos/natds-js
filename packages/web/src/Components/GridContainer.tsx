import React, { FunctionComponent, forwardRef } from 'react';
import MaterialGrid, { GridProps as IGridContainerProps } from '@material-ui/core/Grid';
export { GridProps as IGridContainerProps } from '@material-ui/core/Grid';

export const GridContainer: FunctionComponent<IGridContainerProps> = forwardRef((
  props: IGridContainerProps,
  ref: any
) => (
  <MaterialGrid {...props} container ref={ref} />
));

export default GridContainer;
