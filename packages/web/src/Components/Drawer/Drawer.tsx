// eslint-disable-next-line no-use-before-define
import * as React from "react";
import MaterialDrawer from "@material-ui/core/Drawer";
import { IDrawerProps } from "./Drawer.props";

export { IDrawerProps } from "./Drawer.props";

/**
 * Navigation drawers provide access to destinations in your app or website.
 *
 * For more advanced usages, check [Material UI Drawer docs](https://material-ui.com/components/drawer)
 *
 * ## Importing
 *
 * ```
 * import { Drawer } from "@naturacosmeticos/natds-web";
 * ```
 *
 * @see https://zeroheight.com/28db352be/p/339f2a-navigation-drawer/b/51a722
 * @todo Check whether Drawer component should be renamed to NavigationDrawer
 */
export const Drawer = React.forwardRef<unknown, IDrawerProps>(
  (props: IDrawerProps, ref) => <MaterialDrawer {...props} ref={ref} />);

Drawer.displayName = "Drawer";

export default Drawer;
