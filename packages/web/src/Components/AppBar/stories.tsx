import * as React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from ".";
import Toolbar from "../Toolbar";
import IconButton from "../IconButton";
import Typography from "../Typography";
import Button from "../Button";
import Icon from "../Icon";

interface IAppBarWrapper {
   // eslint-disable-next-line @typescript-eslint/no-explicit-any
   color: any;
   elevation?: number;
}

const AppBarWrapper = (props: IAppBarWrapper) => {
  const { color, elevation: elevationProp } = props;

  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      // eslint-disable-next-line no-magic-numbers
      width: theme.spacing(62),
    },
    menuButton: {
      // eslint-disable-next-line no-magic-numbers
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }));

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" color={color} elevation={elevationProp}>
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <Icon name="filled-navigation-menu" size="tiny" />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            AppBar
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export const colors = [
  {
    title: "default",
    component: <AppBarWrapper color="default" />,
  },
  {
    title: "inherit",
    component: <AppBarWrapper color="inherit" />,
  },
  {
    title: "primary",
    component: <AppBarWrapper color="primary" />,
  },
  {
    title: "secondary",
    component: <AppBarWrapper color="secondary" />,
  },
];

export const elevation = [
  {
    title: "Default elevation",
    component: <AppBarWrapper color="primary" />,
  },
  {
    title: "Elevation equals zero",
    component: <AppBarWrapper color="primary" elevation={0} />,
  },
];
