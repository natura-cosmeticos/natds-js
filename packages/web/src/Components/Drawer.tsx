import React, { FunctionComponent, forwardRef } from "react";
import MaterialDrawer, { DrawerProps as IDrawerProps } from "@material-ui/core/Drawer";
import { withTheme } from "@material-ui/core";

export { DrawerProps as IDrawerProps } from "@material-ui/core/Drawer";

const Drawer: FunctionComponent<IDrawerProps> = forwardRef((
  props: IDrawerProps,
  ref: any,
) => <MaterialDrawer {...props} ref={ref} />);

export default withTheme(Drawer);
