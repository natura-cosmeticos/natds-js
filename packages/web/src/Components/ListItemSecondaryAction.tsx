import React, { FunctionComponent, forwardRef } from "react";
import { withTheme } from "@material-ui/styles";
import MaterialListItemSecondaryAction, {
  ListItemSecondaryActionProps as IListItemSecondaryActionProps,
} from "@material-ui/core/ListItemSecondaryAction";

export { ListItemSecondaryActionProps as IListItemSecondaryActionProps } from "@material-ui/core/ListItemSecondaryAction";

const ListItemSecondaryAction: FunctionComponent<IListItemSecondaryActionProps> = forwardRef((
  props: IListItemSecondaryActionProps,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ref: any,
) => <MaterialListItemSecondaryAction {...props} ref={ref} />);

ListItemSecondaryAction.displayName = "ListItemSecondaryAction";

export default withTheme(ListItemSecondaryAction);
