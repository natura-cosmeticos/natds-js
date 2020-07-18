import React, { FunctionComponent, forwardRef } from "react";
import { withTheme } from "@material-ui/styles";
import MaterialMenu, { MenuProps as IMenuProps } from "@material-ui/core/Menu";

export { MenuProps as IMenuProps } from "@material-ui/core/Menu";

const Menu: FunctionComponent<IMenuProps> = forwardRef((
  props: IMenuProps,
  ref: any,
) => <MaterialMenu {...props} ref={ref} />);

export default withTheme(Menu);
