import React, { FunctionComponent, forwardRef } from "react";
import MaterialBottomNavigation, { BottomNavigationProps as IBottomNavigationProps } from "@material-ui/core/BottomNavigation";
import { withTheme } from "@material-ui/core/styles";

export { BottomNavigationProps as IBottomNavigationProps } from "@material-ui/core/BottomNavigation";

export const BottomNavigation: FunctionComponent<IBottomNavigationProps> = forwardRef((
  props: IBottomNavigationProps,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ref: any,
) => <MaterialBottomNavigation {...props} ref={ref} />);

BottomNavigation.displayName = "BottomNavigation";

export default withTheme(BottomNavigation);
