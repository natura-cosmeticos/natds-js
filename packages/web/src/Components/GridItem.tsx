import React, { FunctionComponent, forwardRef } from "react";
import MaterialGrid, { GridProps as IGridItemProps } from "@material-ui/core/Grid";

export { GridProps as IGridItemProps } from "@material-ui/core/Grid";

export const GridItem: FunctionComponent<IGridItemProps> = forwardRef((
  props: IGridItemProps,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ref: any,
) => <MaterialGrid {...props} item ref={ref} />);

GridItem.displayName = "GridItem";

export default GridItem;
