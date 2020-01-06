import * as React from 'react';
import { AppBar, Toolbar, IconButton, Typography, Button, Icon } from '@naturacosmeticos/natds-web';
import { select } from '@storybook/addon-knobs';
import { makeStyles } from '@material-ui/core/styles';

const colors: any = {
  default: 'default',
  inherit: 'inherit',
  primary: 'primary',
  secondary: 'secondary'
};

const positions: any = {
  absolute: 'absolute',
  fixed: 'fixed',
  relative: 'relative',
  static: 'static',
  sticky: 'sticky',
};


export const Interactive = () => {
  const useStyles = makeStyles(theme => ({
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }));

  const classes = useStyles();

  return (
    <div>
      <AppBar position={select('position', positions, positions.static)} color={select('color', colors, colors.primary)}>
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <Icon name="filled-brand-naturarosacea" size="small" />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            News
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};
