import React, { FunctionComponent, forwardRef } from "react";
import MaterialTabItem, {
  TabProps as ITabItemProps
} from "@material-ui/core/Tab";
import { withTheme } from "@material-ui/core/styles";
export { TabProps as ITabItemProps } from "@material-ui/core/Tab";

export const TabItem: FunctionComponent<ITabItemProps> = forwardRef((
  props: ITabItemProps,
  ref: any
) => <MaterialTabItem {...props} ref={ref} />);

export default withTheme(TabItem);
