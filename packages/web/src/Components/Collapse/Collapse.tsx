import * as React from "react";
import MaterialCollapse from "@material-ui/core/Collapse";
import { ICollapseProps } from "./Collapse.props";

export { ICollapseProps } from "./Collapse.props";

export const Collapse = React.forwardRef<unknown, ICollapseProps>((
  props: ICollapseProps, ref,
) => <MaterialCollapse {...props} ref={ref} />);

Collapse.displayName = "Collapse";

export default Collapse;
