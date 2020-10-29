import * as React from "react";
import { makeStyles } from "@material-ui/core";
import List from "../List";
import { IDrawerMenuProps } from "./DrawerMenu.props";
import useDefaultTheme from "../../hooks/useDefaultTheme";
import { BuildDrawerMenuItems } from "./BuildDrawerMenuItems";
import { DrawerMenuComponent } from "./DrawerMenuComponent";

/**
 * ## Importing
 *
 * ```
 * import { DrawerMenu } from '@naturacosmeticos/natds-web';
 * ```
 *
 * @todo refactor(web): refactor DrawerMenu component
 */
export const DrawerMenu = React.forwardRef<HTMLElement, IDrawerMenuProps>((
  props: IDrawerMenuProps, ref,
) => {
  const {
    children, list, component, ...rest
  } = props;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const theme : any = useDefaultTheme();

  // @todo move to .styles.ts file
  const StyledList = React.useMemo(() => makeStyles({
      padding: {
        marginBottom: theme.sizes?.tiny,
        marginTop: theme.sizes?.tiny,
        paddingBottom: 0,
        paddingTop: 0,
      },
    }), [theme]),

    content = children || <List
      classes={StyledList()}
      dense
    >{list && list.map((drawerMenuSectionProps, index) => (
        <BuildDrawerMenuItems {...drawerMenuSectionProps} key={index} />
      ))}
    </List>;

  return (
    <DrawerMenuComponent {...rest} as={component} ref={ref}>
      {content}
    </DrawerMenuComponent>
  );
});

DrawerMenu.displayName = "DrawerMenu";

export default DrawerMenu;
