import * as React from "react";
import MaterialListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import { IListItemSecondaryActionProps } from "./ListItemSecondaryAction.props";

/**
 * ## Importing
 *
 * ```
 * import { ListItemSecondaryAction } from "@naturacosmeticos/natds-web";
 * ```
 */
export const ListItemSecondaryAction = React.forwardRef<unknown, IListItemSecondaryActionProps>((
  props: IListItemSecondaryActionProps, ref,
) => <MaterialListItemSecondaryAction {...props} ref={ref} />);

ListItemSecondaryAction.displayName = "ListItemSecondaryAction";

export default ListItemSecondaryAction;
