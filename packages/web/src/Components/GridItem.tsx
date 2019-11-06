import React, { FunctionComponent } from 'react';

import MaterialGrid, { GridProps } from '@material-ui/core/Grid';

const GridItem: FunctionComponent<GridProps> = (props: GridProps) => {
  return <MaterialGrid {...props} item />;
};

export default GridItem;
