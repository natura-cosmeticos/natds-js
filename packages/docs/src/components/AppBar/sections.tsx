import * as React from 'react';
import { AppBar, Toolbar, IconButton, Typography, Button, Icon } from '@naturacosmeticos/natds-web';
import { makeStyles } from '@material-ui/core/styles';

const AppBarWrapper = ({ color }: { color: any }) => {
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
      <AppBar position="static" color={color}>
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <Icon name="filled-brand-naturarosacea" size="small" />
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
