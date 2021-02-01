import * as React from "react";
import MaterialDivider from "@material-ui/core/Divider";
import { IDividerProps } from "./Divider.props";

/**
 * ```
 * import { Divider } from "@naturacosmeticos/natds-web";
 * ```
 */
export const Divider = React.forwardRef<HTMLHRElement, IDividerProps>(
  ({ variant = "fullWidth" }: IDividerProps, ref) => (
    <MaterialDivider ref={ref} variant={variant} />
  ),
);

Divider.displayName = "Divider";

export default Divider;
