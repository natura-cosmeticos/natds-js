/* eslint-disable sort-keys */
import * as React from "react";
import { createStyles, makeStyles } from "@material-ui/core";
import ListItem from "../../ListItem";
import ListItemIcon from "../../ListItemIcon";
import Icon from "../../Icon";
import ListItemText from "../../ListItemText";
import Collapse from "../../Collapse";
import List from "../../List";
import BuildDrawerMenuItems from "../BuildDrawerMenuItems/BuildDrawerMenuItems";
import { getMenuItemText } from "../getMenuItemText";
import { IDrawerMenuSectionProps } from "./DrawerMenuSection.props";
import { IThemeWeb } from "../../../Themes";

export { IDrawerMenuSectionProps } from "./DrawerMenuSection.props";

const ICON_ARROW_DOWN = "outlined-navigation-arrowbottom",
  ICON_ARROW_UP = "outlined-navigation-arrowtop";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const DrawerMenuSection = React.forwardRef<any, IDrawerMenuSectionProps>((
  props: IDrawerMenuSectionProps, ref,
) => {
  const {
    onToggle, icon, name, list,
  } = props;

  const [
    opened, toggleSubmenu,
  ] = React.useState(props.opened);

  const useSublistStyles = makeStyles((theme: IThemeWeb) => createStyles({
    padding: {
      borderLeft: `${theme.palette?.action?.hover} 1px solid`,
      margin: `0 0 0 ${theme.sizes?.semiX}px`,
      padding: `0 0 0 ${theme.sizes?.tiny}px`,
    },
  }));

  const useListSectionItemStyles = makeStyles((theme: IThemeWeb) => createStyles({
    root: {
      borderRadius: theme.shape?.borderRadius,
      cursor: "pointer",
      marginBottom: theme.sizes?.micro,
      padding: theme.sizes?.tiny,
      "&:hover": {
        backgroundColor: theme.palette?.action?.hover,
      },
      "&$selected": {
        backgroundColor: `${theme.palette?.action?.hover}`,
        "&:hover": {
          backgroundColor: theme.palette?.action?.hover,
        },
      },
    },
    selected: {},
  }));

  const useListItemIconStyles = makeStyles((theme: IThemeWeb) => createStyles({
    root: {
      marginRight: theme.sizes?.standard,
      marginTop: 0,
      minWidth: "auto",
    },
  }));

  const classes = useSublistStyles();
  const classesItem = useListSectionItemStyles();
  const classesIcon = useListItemIconStyles();
  const listIconName = opened ? ICON_ARROW_UP : ICON_ARROW_DOWN;

  const handleClick = (event: React.SyntheticEvent) => {
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
        >{list.map((drawerMenuSectionProps, index) => (
            <BuildDrawerMenuItems {...drawerMenuSectionProps} key={index} />
          ))}</List>}
      </Collapse>
    </>
  );
});

DrawerMenuSection.displayName = "DrawerMenuSection";

export default DrawerMenuSection;
