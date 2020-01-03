import * as React from 'react';
import { Snackbar, SnackbarContent, Typography, Icon, Button, IconButton } from '@naturacosmeticos/natds-web';
import { makeStyles } from '@material-ui/core/styles';
import { select, number } from '@storybook/addon-knobs';

const colors: any = {
  default: 'default',
  error: 'error',
  warning: 'warning',
  success: 'success',
  info: 'info'
};

const rangeOptions: any = {
  range: true,
  min: 500,
  max: 10000,
  step: 500,
};

const verticalAnchor: any = {
  top: 'top',
  bottom: 'bottom'
};

const horizontalAnchor: any = {
  left: 'left',
  right: 'right',
  center: 'center'
};

export const Interactive = () => {
  const [isOpen, toggleOpen] = React.useState(false);

  const handleClose = () => {
    toggleOpen(false);
  };

  const useStyles = makeStyles({
    message: {
      display: 'flex',
      alignItems: 'center'
    },
    messageIcon: {
      marginRight: '10px'
    }
  });

  const classes = useStyles();

  return (
    <>
      <Button onClick={() => toggleOpen(true)}  variant="contained">
        Click me to open the Snackbar
      </Button>
      <Snackbar
        open={isOpen}
        anchorOrigin={{
          vertical: select('anchorOrigin.vertical', verticalAnchor, verticalAnchor.bottom),
          horizontal: select('anchorOrigin.horizontal', horizontalAnchor, horizontalAnchor.left),
        }}
        autoHideDuration={number('autoHideDuration', 2000, rangeOptions)}
        onClose={handleClose}
      >
        <SnackbarContent
          color={select('color', colors, colors.default)}
          action={
            <IconButton color="inherit" onClick={handleClose} >
              <Icon name="filled-alert-cancel" size="tiny" />
            </IconButton>
          }
          message={
            <span className={classes.message}>
              <span className={classes.messageIcon}>
                <Icon name="outlined-navigation-close" size="small"/>
              </span>
              <Typography>This is a message</Typography>
            </span>
          }
        />
      </Snackbar>
    </>
  );
};
