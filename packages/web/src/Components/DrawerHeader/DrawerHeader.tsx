// eslint-disable-next-line no-use-before-define
import * as React from "react";

import Typography from "../Typography";
import Avatar from "../Avatar";
import { IDrawerHeaderProps } from "./DrawerHeader.props";
import useStyles from "./DrawerHeader.styles";

export { IDrawerHeaderProps } from "./DrawerHeader.props";

/**
 * ## Importing
 *
 * ```
 * import { DrawerHeader } from '@naturacosmeticos/natds-web';
 * ```
 */
export const DrawerHeader = React.forwardRef<HTMLElement, IDrawerHeaderProps>((
  props: IDrawerHeaderProps, ref,
) => {
  const {
    avatarChildren,
    avatarComponent: AvatarComponent = Avatar,
    avatarSrc,
    children,
    component: Component = "div",
    primary,
    secondary,
    ...otherProps
  } = props;

  const { avatar, root } = useStyles();

  let content = <>
    {(avatarSrc || avatarChildren) && <AvatarComponent className={avatar} size="large" src={avatarSrc}>{avatarChildren}</AvatarComponent>}
    {primary && <Typography variant="h5">{primary}</Typography>}
    {secondary && <Typography variant="subtitle2" color="textSecondary">{secondary}</Typography>}
  </>;

  if (children) {
    content = <>{children}</>;
  }

  return (
    <Component
      className={root}
      {...otherProps}
      ref={ref}>
      {content}
    </Component>
  );
});

DrawerHeader.displayName = "DrawerHeader";

export default DrawerHeader;
