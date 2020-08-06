import React, { FunctionComponent, forwardRef } from "react";
import { withTheme } from "@material-ui/styles";
import MaterialListItemIcon, {
  ListItemIconProps as IListItemIconProps,
} from "@material-ui/core/ListItemIcon";

export { ListItemIconProps as IListItemIconProps } from "@material-ui/core/ListItemIcon";

export const ListItemIcon: FunctionComponent<IListItemIconProps> = forwardRef((
  props: IListItemIconProps,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ref: any,
) => <MaterialListItemIcon {...props} ref={ref} />);

ListItemIcon.displayName = "ListItemIcon";

export default withTheme(ListItemIcon);
