import React, { FunctionComponent, forwardRef } from "react";
import { withTheme } from "@material-ui/styles";
import MaterialMenu, { MenuProps as IMenuProps } from "@material-ui/core/Menu";

export { MenuProps as IMenuProps } from "@material-ui/core/Menu";

const Menu: FunctionComponent<IMenuProps> = forwardRef((
  props: IMenuProps,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ref: any,
) => <MaterialMenu {...props} ref={ref} />);

Menu.displayName = "Menu";

export default withTheme(Menu);
