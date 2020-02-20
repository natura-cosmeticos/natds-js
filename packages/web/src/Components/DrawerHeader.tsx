import React, { FunctionComponent, forwardRef } from 'react';
import { withTheme } from '@material-ui/core';
import styled from 'styled-components';
import { IThemeWeb } from 'Themes';
import { getDefaultTheme } from './shared';

import Typography from './Typography';
import Avatar from './Avatar';

export interface IDrawerHeaderProps {
  children?: React.ReactNode;
  component?: React.ElementType;
  primary?: React.ReactNode;
  secondary?: React.ReactNode;
  avatarSrc?: string;
  avatarChildren?: React.ReactNode;
  theme: IThemeWeb | unknown;
}

const buildContent = ({ primary, secondary, avatarSrc, avatarChildren, theme }: IDrawerHeaderProps) => (
  <>
    {(avatarSrc || avatarChildren) && <DrawerHeaderAvatar as={Avatar} src={avatarSrc} children={avatarChildren} size="large" theme={theme} />}
    {primary && <Typography children={primary} variant="h5" />}
    {secondary && <Typography children={secondary} variant="subtitle2" color="textSecondary" />}
  </>
);

export const DrawerHeader: FunctionComponent<IDrawerHeaderProps> = forwardRef((
  props: IDrawerHeaderProps,
  ref: any
) => {
  const { children, component, theme: providerTheme, ...rest } = props;
  const theme: any = React.useMemo(() => getDefaultTheme(providerTheme), [providerTheme]);
  const content = children || buildContent({ ...props, theme });

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

export default withTheme(DrawerHeader);

const DrawerHeaderComponent = styled.div<{ theme: IThemeWeb }>`
  border-bottom: ${({ theme }) => (`${theme.palette.divider} 1px solid`)};
  flex: 0 0 auto;
  padding: ${({ theme }) => `${theme.sizes.semi}px ${theme.sizes.small}px ${theme.sizes.small}px`};
`;

const DrawerHeaderAvatar = styled.div`
  margin-bottom: ${({ theme }) => `${theme.sizes.small}px`};
`;
