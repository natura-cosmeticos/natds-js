import React, { FunctionComponent, forwardRef } from "react";
import MaterialDrawer, { DrawerProps as IDrawerProps } from "@material-ui/core/Drawer";
import { withTheme } from "@material-ui/core";

export { DrawerProps as IDrawerProps } from "@material-ui/core/Drawer";

const Drawer: FunctionComponent<IDrawerProps> = forwardRef((
  props: IDrawerProps,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ref: any,
) => <MaterialDrawer {...props} ref={ref} />);

Drawer.displayName = "Drawer";

export default withTheme(Drawer);
