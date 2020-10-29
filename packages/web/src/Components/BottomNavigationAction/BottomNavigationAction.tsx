import * as React from "react";
import MaterialBottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import { IBottomNavigationActionProps } from "./BottomNavigationAction.props";
import { useStyles } from "./BottomNavigationAction.styles";

export { IBottomNavigationActionProps } from "./BottomNavigationAction.props";

/**
 * ## Importing
 *
 * ```
 * import { BottomNavigationAction } from '@naturacosmeticos/natds-web';
 * ```
 */
export const BottomNavigationAction = React.forwardRef<HTMLButtonElement, IBottomNavigationActionProps>((
  props: IBottomNavigationActionProps, ref,
) => {
  const classes = useStyles();

  return <MaterialBottomNavigationAction {...props} classes={classes} ref={ref} />;
});

BottomNavigationAction.displayName = "BottomNavigationAction";

export default BottomNavigationAction;
