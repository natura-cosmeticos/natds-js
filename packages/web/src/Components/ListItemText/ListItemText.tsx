import * as React from "react";
import MaterialListItemText from "@material-ui/core/ListItemText";
import { IListItemTextProps } from "./ListItemText.props";

export { IListItemTextProps } from "./ListItemText.props";

/**
 * ## Importing
 *
 * ```
 * import { ListItemText } from "@naturacosmeticos/natds-web";
 * ```
 */
export const ListItemText = React.forwardRef<unknown, IListItemTextProps>((
  props: IListItemTextProps, ref,
) => <MaterialListItemText {...props} ref={ref} />);

ListItemText.displayName = "ListItemText";

export default ListItemText;
