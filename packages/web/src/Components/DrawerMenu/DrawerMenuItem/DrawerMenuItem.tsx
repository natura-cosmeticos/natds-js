// eslint-disable-next-line no-use-before-define
import * as React from "react";
import { makeStyles } from "@material-ui/core";
import ListSubheader from "../../ListSubheader";
import Typography from "../../Typography";
import ListItem from "../../ListItem";
import ListItemIcon from "../../ListItemIcon";
import Icon from "../../Icon";
import ListItemText from "../../ListItemText";
import { IDrawerMenuItemProps } from "./DrawerMenuItem.props";
import { MenuItemText } from "../MenuItemText";
import { IDrawerMenuSectionProps } from "../DrawerMenuSection";
import { IThemeWeb } from "../../../Themes";

export const DrawerMenuItem = React.forwardRef<HTMLDivElement, IDrawerMenuItemProps>((
  props: IDrawerMenuItemProps, ref,
) => {
  const {
    onSelect, name, icon, selected, section,
  } = props;

  const useListItemStyles = makeStyles((theme: IThemeWeb) => ({
    root: {
      borderRadius: theme.shape?.borderRadius,
      cursor: "pointer",
      padding: theme.sizes?.tiny,
      // eslint-disable-next-line sort-keys
      "&:hover": {
        backgroundColor: theme.palette?.action?.hover,
      },
    },
  }));
  const classes = useListItemStyles();

  const useListItemIconStyles = makeStyles(({ sizes }: IThemeWeb) => makeStyles({
    root: {
      marginRight: sizes?.standard,
      marginTop: sizes?.none,
      minWidth: "auto",
    },
  }));
  const classesIcon = useListItemIconStyles();

  const useListSubheaderStyles = makeStyles((theme: IThemeWeb) => makeStyles({
    root: {
      backgroundColor: `${theme.palette?.background?.paper}`,
      borderTop: `${theme.palette?.action?.hover} 1px solid`,
      margin: `${theme.sizes?.small}px -${theme.sizes?.tiny}px 0`,
    },
  }));

  const classesSubheader = useListSubheaderStyles();

  if (section) {
    return (
      <ListSubheader classes={classesSubheader}><Typography variant="caption" component="span">{section}</Typography></ListSubheader>
    );
  }

  const handleClick = (event: React.SyntheticEvent) => onSelect && onSelect(event, name);
  const onClick = onSelect ? { onClick: handleClick } : {};

  return (
    <ListItem
      {...onClick}
      classes={classes}
      selected={selected}
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      component={"li"}
      button
      ref={ref}>
      {icon && <ListItemIcon classes={classesIcon}><Icon name={icon} size="tiny" /></ListItemIcon>}
      <ListItemText>
        <MenuItemText {...props as IDrawerMenuSectionProps} />
      </ListItemText>
    </ListItem>
  );
});

DrawerMenuItem.displayName = "DrawerMenuItem";

export default DrawerMenuItem;
