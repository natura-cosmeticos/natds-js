import React, { FunctionComponent, forwardRef } from "react";
import MaterialCollapse, {
  CollapseProps as ICollapseProps,
} from "@material-ui/core/Collapse";

export { CollapseProps as ICollapseProps } from "@material-ui/core/Collapse";

const Collapse: FunctionComponent<ICollapseProps> = forwardRef((
  props: ICollapseProps,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ref: any,
) => <MaterialCollapse {...props} ref={ref} />);

Collapse.displayName = "Collapse";

export default Collapse;
