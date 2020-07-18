import React, { FunctionComponent, forwardRef } from "react";
import MaterialGrid, { GridProps as IGridItemProps } from "@material-ui/core/Grid";

export { GridProps as IGridItemProps } from "@material-ui/core/Grid";

export const GridItem: FunctionComponent<IGridItemProps> = forwardRef((
  props: IGridItemProps,
  ref: any,
) => <MaterialGrid {...props} item ref={ref} />);

export default GridItem;
