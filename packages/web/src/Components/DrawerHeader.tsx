import React, { FunctionComponent } from 'react';
import { withTheme } from '@material-ui/core';
import styled from 'styled-components';
import { tokens } from '@naturacosmeticos/natds-styles';
import { IThemeWeb } from 'Themes';
import Typography from './Typography';
import Avatar from './Avatar';

const { spacingSemi, spacingSmall } = tokens.spacing;

export interface IDrawerHeaderProps {
  children?: React.ReactNode;
  component?: React.ElementType;
  primary?: React.ReactNode;
  secondary?: React.ReactNode;
  avatarSrc?: string;
  avatarChildren?: React.ReactNode;
  theme: IThemeWeb | unknown;
}

const buildContent = ({ primary, secondary, avatarSrc, avatarChildren }: any) => (
  <>
    {(avatarSrc || avatarChildren) && <DrawerHeaderAvatar as={Avatar} src={avatarSrc} children={avatarChildren} size="large" />}
    {primary && <Typography children={primary} variant="h5" />}
    {secondary && <Typography children={secondary} variant="subtitle2" color="textSecondary" />}
  </>
);

const DrawerHeader: FunctionComponent<IDrawerHeaderProps> = (props: IDrawerHeaderProps) => {
  const {
    children,
    component,
    primary,
    secondary,
    avatarSrc,
    avatarChildren,
    ...rest
  } = props;

  const content = children || buildContent({ primary, secondary, avatarSrc, avatarChildren });

  return (
    <DrawerHeaderComponent as={component} {...rest}>
      {content}
    </DrawerHeaderComponent>
  );
};

export default withTheme(DrawerHeader);

const DrawerHeaderComponent = styled.div<{ theme: IThemeWeb }>`
  border-bottom: ${({ theme }) => (`${theme.palette.divider} 1px solid`)};
  flex: 0 0 auto;
  padding: ${spacingSemi}px ${spacingSmall}px ${spacingSmall}px;
`;

const DrawerHeaderAvatar = styled.div`
  margin-bottom: ${spacingSmall}px;
`;
