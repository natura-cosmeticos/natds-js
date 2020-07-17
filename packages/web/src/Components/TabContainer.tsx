import React, { FunctionComponent, forwardRef } from "react";
import MaterialTabContainer, {
  TabsProps as ITabContainerProps
} from "@material-ui/core/Tabs";
import { withTheme } from "@material-ui/core/styles";
export { TabsProps as ITabContainerProps } from "@material-ui/core/Tabs";

export const TabContainer: FunctionComponent<ITabContainerProps> = forwardRef((
  props: ITabContainerProps,
  ref: any
) => <MaterialTabContainer {...props} ref={ref} />);

export default withTheme(TabContainer);
