import * as React from "react";
import MaterialListItemIcon from "@material-ui/core/ListItemIcon";
import { IListItemIconProps } from "./ListItemIcon.props";

export { IListItemIconProps } from "./ListItemIcon.props";

/**
 * ## Importing
 *
 * ```
 * import { ListItemIcon } from "@naturacosmeticos/natds-web";
 * ```
 */
export const ListItemIcon = React.forwardRef<unknown, IListItemIconProps>((
  props: IListItemIconProps, ref,
) => <MaterialListItemIcon {...props} ref={ref} />);

ListItemIcon.displayName = "ListItemIcon";

export default ListItemIcon;
