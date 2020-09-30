import * as React from "react";
import MaterialMenuItem from "@material-ui/core/MenuItem";
import { IMenuItemProps } from "./MenuItem.props";

export { IMenuItemProps } from "./MenuItem.props";

/**
 * ## Importing
 *
 * ```
 * import { MenuItem } from '@naturacosmeticos/natds-web';
 * ```
 */
export const MenuItem = React.forwardRef<HTMLLIElement, IMenuItemProps>(
  (props: IMenuItemProps, ref) => {
    const { button, ...otherProps } = props;

    return (
      <MaterialMenuItem
        {...otherProps}
        button={button as true | undefined}
        ref={ref}
      />
    );
  });
MenuItem.displayName = "MenuItem";
export default MenuItem;
