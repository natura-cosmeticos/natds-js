import React, { FunctionComponent, forwardRef } from "react";
import { withTheme } from "@material-ui/core";
import styled from "styled-components";
import { IThemeWeb } from "../Themes";

import Typography from "./Typography";
import Avatar from "./Avatar";
import { getDefaultTheme } from "../hooks/useDefaultTheme";

export interface IDrawerHeaderProps {
  children?: React.ReactNode;
  component?: React.ElementType;
  primary?: React.ReactNode;
  secondary?: React.ReactNode;
  avatarSrc?: string;
  avatarChildren?: React.ReactNode;
  theme: IThemeWeb | unknown;
}

const buildContent = ({
  primary, secondary, avatarSrc, avatarChildren, theme,
}: IDrawerHeaderProps) => <>
  {(avatarSrc || avatarChildren) && <DrawerHeaderAvatar as={Avatar} src={avatarSrc} size="large" theme={theme}>{avatarChildren}</DrawerHeaderAvatar>}
  {primary && <Typography variant="h5">{primary}</Typography>}
  {secondary && <Typography variant="subtitle2" color="textSecondary">{secondary}</Typography>}
</>;

export const DrawerHeader: FunctionComponent<IDrawerHeaderProps> = forwardRef((
  props: IDrawerHeaderProps,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ref: any,
) => {
  const {
    children, component, theme: providerTheme, ...rest
  } = props;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const theme: any = React.useMemo(() => getDefaultTheme(providerTheme), [providerTheme]);
  const content = children || buildContent({
    ...props,
    theme,
  });

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

export default withTheme(DrawerHeader);

// @todo rewrite to remove dependency from StyledComponents
const DrawerHeaderComponent = styled.div<{ theme: IThemeWeb }>`
  border-bottom: ${({ theme }) => `${theme.palette.divider} 1px solid`};
  flex: 0 0 auto;
  padding: ${({ theme }) => `${theme.sizes.semi}px ${theme.sizes.small}px ${theme.sizes.small}px`};
`,

  DrawerHeaderAvatar = styled.div`
  margin-bottom: ${({ theme }) => `${theme.sizes.small}px`};
`;
