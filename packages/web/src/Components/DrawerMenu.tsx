import React, { FunctionComponent } from 'react';
import { withTheme, makeStyles, createStyles, Collapse } from '@material-ui/core';
import styled from 'styled-components';
import { IThemeWeb } from 'Themes';
import ContextualBadge from './ContextualBadge';
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
  component?: React.ReactElement;
  list?: [IDrawerMenuSectionProps];
  theme: IThemeWeb | unknown;
}

export interface IDrawerMenuItemProps {
  name?: string;
  section?: string;
  icon?: keyof typeof iconNames;
  onSelect?: (event: React.SyntheticEvent, name?: string) => void;
  badge?: string;
  selected: boolean;
  theme: IThemeWeb | unknown;
}

export interface IDrawerMenuSectionProps extends IDrawerMenuItemProps {
  onToggle?: (event: React.SyntheticEvent, state: boolean, name?: string) => void;
  opened?: boolean;
  list?: [IDrawerMenuSectionProps];
}

const DrawerMenu: FunctionComponent<IDrawerMenuProps> = (props: IDrawerMenuProps) => {
  const { children, list, theme, ...rest } = props;
  const classes = StyledList();
  const content = children ? children : (
    <List
      children={list && list.map(BuildDrawerMenuItems(theme))}
      classes={classes}
      dense
    />
  );

  return (
    <DrawerMenuComponent {...rest}>
      {content}
    </DrawerMenuComponent>
  );
};

const DrawerMenuSection: FunctionComponent<IDrawerMenuSectionProps> = (props: IDrawerMenuSectionProps) => {
  const { onToggle, icon, name, list, theme } = props;
  const [opened, toggleSubmenu] = React.useState(props.opened);
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
      <ListItem onClick={handleClick} classes={classesItem} selected={opened} button>
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

const DrawerMenuItem: FunctionComponent<IDrawerMenuItemProps> = (props: IDrawerMenuItemProps) => {
  const { onSelect, name, icon, selected, section } = props;

  if (section) {
    const classesSubheader = StyledListSubheader();

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
  margin-left: ${({ theme }) => `${theme.sizes?.micro}px`};
`;

const StyledList = makeStyles((theme: IThemeWeb) =>
  createStyles({
    padding: {
      paddingTop: 0,
      paddingBottom: 0,
      marginTop: theme.sizes?.tiny,
      marginBottom: theme.sizes?.tiny
    }
  })
);

const StyledSubList = makeStyles((theme: IThemeWeb) =>
  createStyles({
    padding: {
      borderLeft: `${theme.palette?.action?.hover} 1px solid`,
      padding: `0 0 0 ${theme.sizes?.tiny}px`,
      margin: `0 0 0 ${theme.sizes?.semix}px`
    }
  })
);

const StyledListSectionItem = makeStyles((theme: IThemeWeb) =>
  createStyles({
    root: {
      borderRadius: theme.shape?.borderRadius,
      padding: theme.sizes?.tiny,
      marginBottom: theme.sizes?.micro,
      cursor: 'pointer',
      '&:hover': {
        backgroundColor: theme.palette?.action?.hover
      },
      '&$selected': {
        backgroundColor: `${theme.palette?.action?.hover}`,
        '&:hover': {
          backgroundColor: theme.palette?.action?.hover
        }
      }
    },
    selected: {}
  })
);

const StyledListItem = makeStyles((theme: IThemeWeb) =>
  createStyles({
    root: {
      borderRadius: theme.shape?.borderRadius,
      padding: theme.sizes?.tiny,
      marginBottom: theme.sizes?.micro,
      cursor: 'pointer',
      '&:hover': {
        backgroundColor: theme.palette?.action?.hover
      }
    }
  })
);

const StyledListItemIcon = makeStyles((theme: IThemeWeb) =>
  createStyles({
    root: {
      minWidth: 'auto',
      marginRight: theme.sizes?.standard,
      marginTop: 0
    }
  })
);

const StyledListSubheader = makeStyles((theme: IThemeWeb) =>
  createStyles({
    root: {
      backgroundColor: `${theme.palette?.background?.paper}`,
      borderTop: `${theme.palette?.action?.hover} 1px solid`,
      margin: `0 -${theme.sizes?.tiny}px`
    }
  })
);

export default withTheme(DrawerMenu);
