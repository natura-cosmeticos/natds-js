// eslint-disable-next-line no-use-before-define
import * as React from "react";
import { List } from "../List";
import { IDrawerMenuProps } from "./DrawerMenu.props";
import { BuildDrawerMenuItems } from "./BuildDrawerMenuItems";
import { useStyles } from "./DrawerMenu.styles";

/**
 * ## Importing
 *
 * ```
 * import { DrawerMenu } from '@naturacosmeticos/natds-web';
 * ```
 */
export const DrawerMenu = React.forwardRef<HTMLElement, IDrawerMenuProps>((
  props: IDrawerMenuProps, ref,
) => {
  const {
    children,
    component: Component = "div",
    list,
    ...otherProps
  } = props;

  const { root, listPadding } = useStyles();

  const content = children || <List
    classes={{ padding: listPadding }}
    dense
  >{list && list.map((drawerMenuSectionProps, index) => (
      <BuildDrawerMenuItems {...drawerMenuSectionProps} key={index} />
    ))}
  </List>;

  return (
    <Component {...otherProps} className={root} ref={ref}>
      {content}
    </Component>
  );
});

DrawerMenu.displayName = "DrawerMenu";

export default DrawerMenu;
