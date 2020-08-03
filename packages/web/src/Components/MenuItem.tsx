import React, { FunctionComponent, forwardRef } from "react";
import { withTheme } from "@material-ui/styles";
import MaterialMenuItem, { MenuItemProps as IMenuItemProps } from "@material-ui/core/MenuItem";

export { MenuItemProps as IMenuItemProps } from "@material-ui/core/MenuItem";

const MenuItem: FunctionComponent<IMenuItemProps> = forwardRef((
  props: IMenuItemProps,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ref: any,
) => {
  const { button } = props;

  return (
    <MaterialMenuItem
      {...props}
      button={button as true | undefined}
      ref={ref}
    />
  );
});

MenuItem.displayName = "MenuItem";

export default withTheme(MenuItem);
