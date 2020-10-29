import * as React from "react";
import MaterialTabContainer from "@material-ui/core/Tabs";
import { ITabContainerProps } from "./TabContainer.props";

export const TabContainer = React.forwardRef<HTMLButtonElement, ITabContainerProps>((
  props: ITabContainerProps, ref,
) => <MaterialTabContainer {...props} ref={ref} />);

TabContainer.displayName = "TabContainer";

export default TabContainer;
