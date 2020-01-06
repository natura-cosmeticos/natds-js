import React from 'react';
import { SnackbarContent, Typography, Icon, IconButton } from '@naturacosmeticos/natds-web';
import { makeStyles } from '@material-ui/core/styles';

const SnackbarContentWrapper = (props: any) => {
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
  return <SnackbarContent {...props} action={
    <IconButton color="inherit">
      <Icon name="filled-action-cancel" size="tiny" />
    </IconButton>
  }
  message={
    <span className={classes.message}>
      <span className={classes.messageIcon}>
        <Icon name="filled-brand-naturarosacea" size="small"/>
      </span>
      <Typography>This is a message</Typography>
    </span>
  }/>;
};

export const colors = [
  {
    title: 'default',
    component: <SnackbarContentWrapper color="default" />
  },
  {
    title: 'error',
    component: <SnackbarContentWrapper color="error" />
  },
  {
    title: 'success',
    component: <SnackbarContentWrapper color="success" />
  },
  {
    title: 'warning',
    component: <SnackbarContentWrapper color="warning" />
  },
  {
    title: 'info',
    component: <SnackbarContentWrapper color="info" />
  }
];
