import * as React from "react";

import MaterialMenu from "@material-ui/core/Menu";
import { IMenuProps } from "./Menu.props";

export { IMenuProps } from "./Menu.props";

/**
 * For more advanced usages, check [Material UI Menu docs](https://material-ui.com/components/Menus/)
 *
 * ## Importing
 *
 * ```
 * import { Menu } from '@naturacosmeticos/natds-web';
 * ```
 */
export const Menu = React.forwardRef<unknown, IMenuProps>(
  (props: IMenuProps, ref) => {
    const { open, ...otherProps } = props;

    return <MaterialMenu open={open} ref={ref} {...otherProps} />;
  },
);

Menu.displayName = "Menu";

export default Menu;
