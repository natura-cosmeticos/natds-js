import React, { FunctionComponent, forwardRef } from "react";
import MaterialGrid, { GridProps as IGridContainerProps } from "@material-ui/core/Grid";

export { GridProps as IGridContainerProps } from "@material-ui/core/Grid";

export const GridContainer: FunctionComponent<IGridContainerProps> = forwardRef((
  props: IGridContainerProps,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ref: any,
) => <MaterialGrid {...props} container ref={ref} />);

GridContainer.displayName = "GridContainer";

export default GridContainer;
