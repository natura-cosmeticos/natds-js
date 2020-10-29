import * as React from "react";

import MaterialGrid from "@material-ui/core/Grid";
import { IGridItemProps } from "./GridItem.props";

export { IGridItemProps } from "./GridItem.props";

/**
 * For more details consult the full [Material Grid API](https://material-ui.com/api/grid/).
 */
export const GridItem = React.forwardRef<HTMLDivElement, IGridItemProps>(
  (props: IGridItemProps, ref) => (
    <MaterialGrid
      item={true}
      ref={ref}
      {...props}
    />),
);

GridItem.displayName = "GridItem";

export default GridItem;
