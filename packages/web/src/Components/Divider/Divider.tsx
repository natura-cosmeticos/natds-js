import * as React from "react";
import MaterialDivider from "@material-ui/core/Divider";
import { IDividerProps } from "./Divider.props";

/**
 * For more advanced usages, check [Material UI Divider docs](https://material-ui.com/components/dividers/)
 *
 * ## Importing
 *
 * ```
 * import { Divider } from "@naturacosmeticos/natds-web";
 * ```
 *
 * @see https://material-ui.com/components/dividers/
 */
export const Divider = React.forwardRef<HTMLHRElement, IDividerProps>(
  (props: IDividerProps, ref) => (
    <MaterialDivider {...props} ref={ref} />
  ),
);

Divider.displayName = "Divider";

export default Divider;
