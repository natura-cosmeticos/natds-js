/* eslint-disable max-lines */
/* eslint-disable new-cap */
/* eslint-disable no-use-before-define */
import React, { FunctionComponent, forwardRef } from "react";
import { makeStyles, withTheme } from "@material-ui/core";
import styled from "styled-components";
import iconNames from "@naturacosmeticos/natds-icons/dist/natds-icons.json";
import { IThemeWeb } from "../Themes";
import { getDefaultTheme } from "./shared";

import ContextualBadge from "./ContextualBadge";
import Collapse from "./Collapse";
import Icon from "./Icon";
import List from "./List";
import ListItem from "./ListItem";
import ListSubheader from "./ListSubheader";
import ListItemIcon from "./ListItemIcon";
import ListItemText from "./ListItemText";
import Typography from "./Typography";

const ICON_ARROW_DOWN = "outlined-navigation-arrowbottom",
  ICON_ARROW_UP = "outlined-navigation-arrowtop";

export interface IDrawerMenuProps {
  children?: React.ReactNode;
  component?: React.ElementType;
  list?: [IDrawerMenuSectionProps];
  theme: IThemeWeb | unknown;
}

/**
 * @todo Separate classes for `DrawerMenu.tsx` file
 */
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

// @todo refactor(web): refactor DrawerMenu component
export const DrawerMenu: FunctionComponent<IDrawerMenuProps> = forwardRef((
  props: IDrawerMenuProps,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ref: any,
) => {
  const {
    children, list, theme: providerTheme, component, ...rest
  } = props;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const theme: any = React.useMemo(() => getDefaultTheme(providerTheme), [providerTheme]);
  // @todo rewrite to remove dependency from StyledComponents
  const StyledList = React.useMemo(() => makeStyles({
      padding: {
        marginBottom: theme.sizes.tiny,
        marginTop: theme.sizes.tiny,
        paddingBottom: 0,
        paddingTop: 0,
      },
    }), [theme]),

    content = children || <List
      classes={StyledList()}
      dense
    >{list && list.map(BuildDrawerMenuItems(theme))}</List>;

  return (
    <DrawerMenuComponent {...rest} as={component} ref={ref}>
      {content}
    </DrawerMenuComponent>
  );
});

DrawerMenu.displayName = "DrawerMenu";

export const DrawerMenuSection: FunctionComponent<IDrawerMenuSectionProps> = forwardRef((
  props: IDrawerMenuSectionProps,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ref: any,
) => {
  const {
    onToggle, icon, name, list, theme: providerTheme,
  } = props;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const theme: any = React.useMemo(() => getDefaultTheme(providerTheme), [providerTheme]);
  const [
      opened, toggleSubmenu,
    ] = React.useState(props.opened),

    StyledSubList = React.useMemo(() => makeStyles({
      padding: {
        borderLeft: `${theme.palette.action.hover} 1px solid`,
        margin: `0 0 0 ${theme.sizes.semiX}px`,
        padding: `0 0 0 ${theme.sizes.tiny}px`,
      },
    }), [theme]),

    StyledListSectionItem = React.useMemo(() => makeStyles({
      root: {
        borderRadius: theme.shape.borderRadius,
        cursor: "pointer",
        marginBottom: theme.sizes.micro,
        padding: theme.sizes.tiny,
        // eslint-disable-next-line sort-keys
        "&:hover": {
          backgroundColor: theme.palette.action.hover,
        },
        // eslint-disable-next-line sort-keys
        "&$selected": {
          backgroundColor: `${theme.palette.action.hover}`,
          // eslint-disable-next-line sort-keys
          "&:hover": {
            backgroundColor: theme.palette.action.hover,
          },
        },
      },
      selected: {},
    }), [theme]),

    StyledListItemIcon = React.useMemo(() => makeStyles({
      root: {
        marginRight: theme.sizes.standard,
        marginTop: 0,
        minWidth: "auto",
      },
    }), [theme]),

    classes = StyledSubList(),
    classesItem = StyledListSectionItem(),
    classesIcon = StyledListItemIcon(),
    listIconName = opened ? ICON_ARROW_UP : ICON_ARROW_DOWN,

    handleClick = (event: React.SyntheticEvent) => {
      toggleSubmenu(!opened);

      /**
       * @todo refactor(web): convert expression to if block, add test
       */
      // eslint-disable-next-line no-unused-expressions
      onToggle && onToggle(event, !opened, name);
    };

  return (
    <>
      <ListItem
        onClick={handleClick}
        classes={classesItem}
        selected={opened}
        component="li"
        button
        ref={ref}>
        {icon && <ListItemIcon classes={classesIcon}><Icon name={icon} size="tiny" /></ListItemIcon>}
        <ListItemText>{getMenuItemText(props)}</ListItemText>
        <Icon name={listIconName} size="tiny" />
      </ListItem>
      <Collapse in={opened} timeout="auto" unmountOnExit component="li">
        {list && <List
          classes={classes}
          dense
        >{list.map(BuildDrawerMenuItems(theme))}</List>}
      </Collapse>
    </>
  );
});

DrawerMenuSection.displayName = "DrawerMenuSection";

export const DrawerMenuItem: FunctionComponent<IDrawerMenuItemProps> = forwardRef((
  props: IDrawerMenuItemProps,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ref: any,
) => {
  const {
    onSelect, name, icon, selected, section, theme: providerTheme,
  } = props;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const theme: any = React.useMemo(() => getDefaultTheme(providerTheme), [providerTheme]);

  const StyledListItem = React.useMemo(() => makeStyles({
    root: {
      borderRadius: theme.shape.borderRadius,
      cursor: "pointer",
      padding: theme.sizes.tiny,
      // eslint-disable-next-line sort-keys
      "&:hover": {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }), [theme]);

  const StyledListSubheader = React.useMemo(() => makeStyles({
    root: {
      backgroundColor: `${theme.palette.background.paper}`,
      borderTop: `${theme.palette.action.hover} 1px solid`,
      margin: `${theme.sizes.small}px -${theme.sizes.tiny}px 0`,
    },
  }), [theme]);

  const StyledListItemIcon = React.useMemo(() => makeStyles({
    root: {
      marginRight: theme.sizes.standard,
      marginTop: 0,
      minWidth: "auto",
    },
  }), [theme]);

  if (section) {
    const classesSubheader = StyledListSubheader(theme);

    return (
      <ListSubheader classes={classesSubheader}><Typography variant="caption" component="span">{section}</Typography></ListSubheader>
    );
  }

  const classes = StyledListItem(),
    classesIcon = StyledListItemIcon(),
    handleClick = (event: React.SyntheticEvent) => onSelect && onSelect(event, name),
    onClick = onSelect ? { onClick: handleClick } : {};

  return (
    <ListItem
      {...onClick}
      classes={classes}
      selected={selected}
      component="li"
      button
      ref={ref}>
      {icon && <ListItemIcon classes={classesIcon}><Icon name={icon} size="tiny" /></ListItemIcon>}
      <ListItemText>{getMenuItemText(props)}</ListItemText>
    </ListItem>
  );
});

DrawerMenuItem.displayName = "DrawerMenuItem";

// eslint-disable-next-line react/display-name
const BuildDrawerMenuItems = (theme: IThemeWeb | unknown) => (props: IDrawerMenuSectionProps, key: number) => {
  if (props.list) {
    return <DrawerMenuSection theme={theme} key={key} {...props} />;
  }

  return <DrawerMenuItem theme={theme} key={key} {...props} />;

};

const getMenuItemText = (props: IDrawerMenuSectionProps) => {
  const { badge, name, theme } = props;

  if (!badge) {
    return name;
  }

  return (
    <>
      <Typography variant="body2" component="span">{name}</Typography>
      <StyledBadge as={ContextualBadge} theme={theme} color="error">{badge}</StyledBadge>
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
