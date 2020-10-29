import * as React from "react";

import MaterialGrid from "@material-ui/core/Grid";
import { IGridContainerProps } from "./GridContainer.props";

export { IGridContainerProps } from "./GridContainer.props";

/**
 * For more details consult the full [Material Grid API](https://material-ui.com/api/grid/).
 */
export const GridContainer = React.forwardRef<HTMLDivElement, IGridContainerProps>(
  (props: IGridContainerProps, ref) => (
    <MaterialGrid
      container={true}
      ref={ref}
      {...props}
    />
  ),
);

GridContainer.displayName = "GridContainer";

export default GridContainer;
