import * as React from "react";
import MaterialBottomNavigation from "@material-ui/core/BottomNavigation";
import { IBottomNavigationProps } from "./BottomNavigation.props";

export { IBottomNavigationProps } from "./BottomNavigation.props";

/**
 * For more advanced usages, check [Material UI Bottom Navigation docs](https://material-ui.com/components/bottom-navigation/)
 *
 * ## Importing
 *
 * ```
 * import { BottomNavigation } from '@naturacosmeticos/natds-web';
 *```
 */
export const BottomNavigation = React.forwardRef<HTMLDivElement, IBottomNavigationProps>(
  (props: IBottomNavigationProps, ref) => (<MaterialBottomNavigation {...props} ref={ref} />),
);

BottomNavigation.displayName = "BottomNavigation";

export default BottomNavigation;
