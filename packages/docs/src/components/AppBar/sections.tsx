import * as React from 'react';
import { AppBar, Toolbar, IconButton, Typography, Button, Icon } from '@naturacosmeticos/natds-web';
import { makeStyles } from '@material-ui/core/styles';

interface IAppBarWrapper {
   color: any;
   noElevation?: boolean;
}

const AppBarWrapper = (props: IAppBarWrapper) => {
  const { color, noElevation } = props;

  const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
      width: '500px',
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }));

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" color={color} noElevation={noElevation}>
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
    title: 'default',
    component: <AppBarWrapper color="default" />
  },
  {
    title: 'inherit',
    component: <AppBarWrapper color="inherit" />
  },
  {
    title: 'primary',
    component: <AppBarWrapper color="primary" />
  },
  {
    title: 'secondary',
    component: <AppBarWrapper color="secondary" />
  }
];

export const elevation = [
  {
    title: 'noElevation is false',
    component: <AppBarWrapper color="primary" />
  },
  {
    title: 'noElevation is true',
    component: <AppBarWrapper color="primary" noElevation />
  }
];
