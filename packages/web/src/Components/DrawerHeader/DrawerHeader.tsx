import * as React from "react";

import Typography from "../Typography";
import Avatar from "../Avatar";
import { IDrawerHeaderProps } from "./DrawerHeader.props";
import { DrawerHeaderAvatar } from "./DrawerHeaderAvatar/DrawerHeaderAvatar";
import useDefaultTheme from "../../hooks/useDefaultTheme";
import { DrawerHeaderComponent } from "./DrawerHeaderComponent";

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
    children, component, ...rest
  } = props;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const theme: any = useDefaultTheme();

  const buildContent = ({
    primary, secondary, avatarSrc, avatarChildren,
  }: IDrawerHeaderProps) => <>
    {(avatarSrc || avatarChildren) && <DrawerHeaderAvatar as={Avatar} src={avatarSrc} size="large" theme={theme}>{avatarChildren}</DrawerHeaderAvatar>}
    {primary && <Typography variant="h5">{primary}</Typography>}
    {secondary && <Typography variant="subtitle2" color="textSecondary">{secondary}</Typography>}
  </>;

  const content = children || buildContent(props);

  return (
    <DrawerHeaderComponent
      as={component}
      theme={theme}
      {...rest}
      ref={ref}>
      {content}
    </DrawerHeaderComponent>
  );
});

DrawerHeader.displayName = "DrawerHeader";

export default DrawerHeader;
