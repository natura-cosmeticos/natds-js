import * as React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Icon,
  Typography,
  Badge
} from "@naturacosmeticos/natds-web";
import { useStyles } from "./styles";

type colors = "primary" | "secondary" | "default" | "inherit";

export const WrappedAppBar = ({ color }: { color: colors }) => {
  const classes = useStyles();

  return (
    <div className={classes.appBar}>
      <AppBar position="relative" color={color}>
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <Icon name="filled-navigation-menu" size="tiny" />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            AppBar
          </Typography>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <Icon name="outlined-action-search" size="tiny" />
          </IconButton>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <Badge color="error" badgeContent="1">
              <Icon name="outlined-action-filter" size="tiny" />
            </Badge>
          </IconButton>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <Icon name="outlined-social-myprofile" size="tiny" />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export const WrappedAppBars = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <WrappedAppBar color="default" />
      <WrappedAppBar color="primary" />
      <WrappedAppBar color="secondary" />
    </div>
  );
};
