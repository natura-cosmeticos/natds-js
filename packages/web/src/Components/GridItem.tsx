import React, { FunctionComponent } from 'react';
import MaterialGrid, { GridProps as IGridItemProps } from '@material-ui/core/Grid';
export { GridProps as IGridItemProps } from '@material-ui/core/Grid';

const GridItem: FunctionComponent<IGridItemProps> = (props: IGridItemProps) => {
  return <MaterialGrid {...props} item />;
};

export default GridItem;
