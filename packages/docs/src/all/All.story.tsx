import * as React from "react";
import withContainer from "@decorators/container/container";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, IconButton, Icon, Button, Avatar, TextField, Typography, Badge } from "@naturacosmeticos/natds-web";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  container: {
    marginBottom: "50px"
  },
  appBar: {
    marginBottom: "15px",
    "&:last-child": {
      marginBottom: "0px"
    }
  },
  textField: {
    maxWidth: "328px"
  },
  buttonsContainer: {
    display: "flex",
    justifyContent: "space-between",
    maxWidth: "320px",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

type colors = "primary" | "secondary" | "default" | "inherit";

const WrappedButtons = () => {
  const classes = useStyles();

  return (
    <div className={`${classes.container} ${classes.buttonsContainer}`}>
      <Button color="primary" variant="contained">Contained</Button>
      <Button color="primary" variant="outlined">Outlined</Button>
      <Button color="primary" variant="text">Text</Button>
    </div>
  );
};

const WrappedTextField = () => {
  const classes = useStyles();

  return (
    <div className={`${classes.container} ${classes.textField}`}>
      <TextField label="Label" helpText="Helper Text" id="text-field" type="text" placeholder="Placeholder"/>
    </div>
  );
};

const WrappedAppBar = ({ color }: { color: colors }) => {
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

const WrappedAppBars = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <WrappedAppBar color="default" />
      <WrappedAppBar color="primary" />
      <WrappedAppBar color="secondary" />
    </div>
  );
};

const WrappedAvatar = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Avatar color="primary" size="huge">MS</Avatar>
    </div>
  );
};

export const All = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <WrappedButtons />
      <WrappedTextField />
      <WrappedAppBars />
      <WrappedAvatar />
    </div>
  );
};

export default {
  title: "Samples|All",
  component: All,
  decorators: [withContainer],
  parameters: {
    jestImportPath: "web",
    theme: {
      context: "web"
    },
  },
};
