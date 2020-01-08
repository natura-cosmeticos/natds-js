import * as React from 'react';
import { AppBar, Toolbar, IconButton, Typography, Button, Icon } from '@naturacosmeticos/natds-web';
import { select, boolean, number } from '@storybook/addon-knobs';
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

const optionsElevation: any = {
  range: true,
  min: 0,
  max: 24,
  step: 1,
};


export const Interactive = () => {

  const prominent = boolean('prominent (not a property, check docs)', false);

  const useStyles = makeStyles(theme => ({
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }));

  const useProminentStyles = makeStyles(theme => ({
    title: {
      flexGrow: 1,
      alignSelf: 'flex-end'
    },
    toolbar: {
      minHeight: 128 - theme.spacing(2),
      alignItems: 'flex-start',
      paddingTop: theme.spacing(1),
      paddingBottom: theme.spacing(1),
    }
  }));

  const classes = useStyles();
  const prominentClasses = useProminentStyles();

  return (
    <AppBar elevation={number('elevation', 2, optionsElevation)} position={select('position', positions, positions.static)} color={select('color', colors, colors.primary)}>
      <Toolbar className={prominent ? prominentClasses.toolbar : undefined}>
        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
          <Icon name="filled-navigation-menu" size="tiny" />
        </IconButton>
        <Typography variant="h6" className={prominent ? prominentClasses.title : classes.title}>
          News
        </Typography>
        <Button color="inherit">Login</Button>
      </Toolbar>
    </AppBar>
  );
};
