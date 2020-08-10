import React, { FunctionComponent, forwardRef } from "react";
import MaterialTabContainer, {
  TabsProps as ITabContainerProps,
} from "@material-ui/core/Tabs";
import { withTheme } from "@material-ui/core/styles";

export { TabsProps as ITabContainerProps } from "@material-ui/core/Tabs";

export const TabContainer: FunctionComponent<ITabContainerProps> = forwardRef((
  props: ITabContainerProps,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ref: any,
) => <MaterialTabContainer {...props} ref={ref} />);

TabContainer.displayName = "TabContainer";

export default withTheme(TabContainer);
