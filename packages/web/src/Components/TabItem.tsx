import React, { FunctionComponent, forwardRef } from "react";
import MaterialTabItem, {
  TabProps as ITabItemProps,
} from "@material-ui/core/Tab";
import { withTheme } from "@material-ui/core/styles";

export { TabProps as ITabItemProps } from "@material-ui/core/Tab";

export const TabItem: FunctionComponent<ITabItemProps> = forwardRef((
  props: ITabItemProps,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ref: any,
) => <MaterialTabItem {...props} ref={ref} />);

TabItem.displayName = "TabItem";

export default withTheme(TabItem);
