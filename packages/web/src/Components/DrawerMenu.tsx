import React, { FunctionComponent } from 'react';
import { withTheme, makeStyles } from '@material-ui/core';
import styled from 'styled-components';
import { IThemeWeb } from 'Themes';
import { getDefaultTheme } from './shared';

import ContextualBadge from './ContextualBadge';
import Collapse from './Collapse';
import Icon from './Icon';
import List from './List';
import ListItem from './ListItem';
import ListSubheader from './ListSubheader';
import ListItemIcon from './ListItemIcon';
import ListItemText from './ListItemText';
import Typography from './Typography';

import { iconNames } from '@naturacosmeticos/natds-icons';

const ICON_ARROW_UP = 'outlined-navigation-arrowtop';
const ICON_ARROW_DOWN = 'outlined-navigation-arrowbottom';

export interface IDrawerMenuProps {
  children?: React.ReactNode;
  component?: React.ElementType;
  list?: [IDrawerMenuSectionProps];
  theme: IThemeWeb | unknown;
}

export interface IDrawerMenuItemProps {
  name?: string;
  section?: string;
  icon?: keyof typeof iconNames;
  onSelect?: (event: React.SyntheticEvent, name?: string) => void;
  badge?: string;
  selected?: boolean;
  theme?: IThemeWeb | unknown;
}

export interface IDrawerMenuSectionProps extends IDrawerMenuItemProps {
  onToggle?: (event: React.SyntheticEvent, state: boolean, name?: string) => void;
  opened?: boolean;
  list?: [IDrawerMenuSectionProps];
}

export const DrawerMenu: FunctionComponent<IDrawerMenuProps> = (props: IDrawerMenuProps) => {
  const { children, list, theme: providerTheme, component, ...rest } = props;
  const theme: any = React.useMemo(() => getDefaultTheme(providerTheme), [providerTheme]);
  const StyledList = React.useMemo(() => makeStyles({
    padding: {
      paddingTop: 0,
      paddingBottom: 0,
      marginTop: theme.sizes.tiny,
      marginBottom: theme.sizes.tiny
    }
  }), [theme]);

  const content = children ? children : (
    <List
      children={list && list.map(BuildDrawerMenuItems(theme))}
      classes={StyledList()}
      dense
    />
  );

  return (
    <DrawerMenuComponent {...rest} as={component}>
      {content}
    </DrawerMenuComponent>
  );
};

export const DrawerMenuSection: FunctionComponent<IDrawerMenuSectionProps> = (props: IDrawerMenuSectionProps) => {
  const { onToggle, icon, name, list, theme: providerTheme } = props;
  const theme: any = React.useMemo(() => getDefaultTheme(providerTheme), [providerTheme]);
  const [opened, toggleSubmenu] = React.useState(props.opened);

  const StyledSubList = React.useMemo(() => makeStyles({
    padding: {
      borderLeft: `${theme.palette.action.hover} 1px solid`,
      padding: `0 0 0 ${theme.sizes.tiny}px`,
      margin: `0 0 0 ${theme.sizes.semix}px`
    }
  }), [theme]);

  const StyledListSectionItem = React.useMemo(() => makeStyles({
    root: {
      borderRadius: theme.shape.borderRadius,
      padding: theme.sizes.tiny,
      marginBottom: theme.sizes.micro,
      cursor: 'pointer',
      '&:hover': {
        backgroundColor: theme.palette.action.hover
      },
      '&$selected': {
        backgroundColor: `${theme.palette.action.hover}`,
        '&:hover': {
          backgroundColor: theme.palette.action.hover
        }
      }
    },
    selected: {}
  }), [theme]);

  const StyledListItemIcon = React.useMemo(() => makeStyles({
    root: {
      minWidth: 'auto',
      marginRight: theme.sizes.standard,
      marginTop: 0
    }
  }), [theme]);

  const classes = StyledSubList();
  const classesItem = StyledListSectionItem();
  const classesIcon = StyledListItemIcon();
  const listIconName = opened ? ICON_ARROW_UP : ICON_ARROW_DOWN;

  const handleClick = (event: React.SyntheticEvent) => {
    toggleSubmenu(!opened);

    onToggle && onToggle(event, !opened, name);
  };

  return (
    <>
      <ListItem onClick={handleClick} classes={classesItem} selected={opened} component="li" button>
        {icon && <ListItemIcon classes={classesIcon} children={<Icon name={icon} size="tiny" />} />}
        <ListItemText children={getMenuItemText(props)} />
        <Icon name={listIconName} size="tiny" />
      </ListItem>
      <Collapse in={opened} timeout="auto" unmountOnExit component="li">
        {list && <List
          children={list.map(BuildDrawerMenuItems(theme))}
          classes={classes}
          dense
        />}
      </Collapse>
    </>
  );
};

export const DrawerMenuItem: FunctionComponent<IDrawerMenuItemProps> = (props: IDrawerMenuItemProps) => {
  const { onSelect, name, icon, selected, section, theme: providerTheme } = props;
  const theme: any = React.useMemo(() => getDefaultTheme(providerTheme), [providerTheme]);

  const StyledListItem = React.useMemo(() => makeStyles({
    root: {
      borderRadius: theme.shape.borderRadius,
      padding: theme.sizes.tiny,
      marginBottom: theme.sizes.micro,
      cursor: 'pointer',
      '&:hover': {
        backgroundColor: theme.palette.action.hover
      }
    }
  }), [theme]);

  const StyledListSubheader = React.useMemo(() => makeStyles({
    root: {
      backgroundColor: `${theme.palette.background.paper}`,
      borderTop: `${theme.palette.action.hover} 1px solid`,
      margin: `0 -${theme.sizes.tiny}px`
    }
  }), [theme]);

  const StyledListItemIcon = React.useMemo(() => makeStyles({
    root: {
      minWidth: 'auto',
      marginRight: theme.sizes.standard,
      marginTop: 0
    }
  }), [theme]);

  if (section) {
    const classesSubheader = StyledListSubheader(theme);

    return (
      <ListSubheader classes={classesSubheader} children={
        <Typography variant="caption" component="span" children={section} />
      } />
    );
  }

  const classes = StyledListItem();
  const classesIcon = StyledListItemIcon();
  const handleClick = (event: React.SyntheticEvent) => onSelect && onSelect(event, name);
  const onClick = onSelect ? { onClick: handleClick } : {};

  return (
    <ListItem {...onClick} classes={classes} selected={selected} component="li" button>
      {icon && <ListItemIcon classes={classesIcon} children={<Icon name={icon} size="tiny" />} />}
      <ListItemText children={getMenuItemText(props)} />
    </ListItem>
  );
};

const BuildDrawerMenuItems = (theme: IThemeWeb | unknown) => (
  (props: IDrawerMenuSectionProps, key: number) => (
    props.list
      ? <DrawerMenuSection theme={theme} key={key} {...props} />
      : <DrawerMenuItem theme={theme} key={key} {...props} />
  )
);

const getMenuItemText = (props: IDrawerMenuSectionProps) => {
  const { badge, name, theme } = props;

  if (!badge) return name;

  return (
    <>
      <Typography variant="body2" component="span" children={name} />
      <StyledBadge as={ContextualBadge} theme={theme} color="error" children={badge} />
    </>
  );
};

const DrawerMenuComponent = styled.div`
  flex: 1 1 auto;
`;

const StyledBadge = styled.div<{ theme: IThemeWeb }>`
  margin-left: ${({ theme }) => `${theme.sizes.micro}px`};
`;

export default withTheme(DrawerMenu);
