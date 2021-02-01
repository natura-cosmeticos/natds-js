import * as React from "react";
import MaterialDivider from "@material-ui/core/Divider";
import { IDividerProps } from "./Divider.props";

/**
 *
 * ```
 * import { Divider } from "@naturacosmeticos/natds-web";
 * ```
 *
 */
export const Divider = React.forwardRef<HTMLHRElement, IDividerProps>(
  (props: IDividerProps, ref) => (
    <MaterialDivider {...props} ref={ref} />
  ),
);

Divider.displayName = "Divider";

export default Divider;
