import * as React from "react";
import MaterialTabItem from "@material-ui/core/Tab";
import { ITabItemProps } from "./TabItem.props";

export { ITabItemProps } from "./TabItem.props";

export const TabItem = React.forwardRef<HTMLDivElement, ITabItemProps>(
  (props: ITabItemProps, ref) => (
    <MaterialTabItem {...props} ref={ref} />
  ),
);

TabItem.displayName = "TabItem";

export default TabItem;
