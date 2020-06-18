import React from 'react';
import {
  SnackbarContent,
  Typography,
  Icon,
  IconButton,
  Button,
} from '@naturacosmeticos/natds-web';
import { makeStyles } from '@material-ui/core/styles';

const SnackbarContentWrapper = (props: any) => {
  const useStyles = makeStyles({
    message: {
      display: 'flex',
      alignItems: 'center',
    },
    messageIcon: {
      marginRight: '10px',
    },
  });

  const classes = useStyles();
  return (
    <SnackbarContent
      {...props}
      action={
        <IconButton color="inherit">
          <Icon name="filled-action-cancel" size="tiny" />
        </IconButton>
      }
      message={
        <span className={classes.message}>
          <span className={classes.messageIcon}>
            <Icon name="filled-brand-naturarosacea" size="small" />
          </span>
          <Typography variant="body2">This is a message</Typography>
        </span>
      }
    />
  );
};

const SnackbarButtonExample = (props: any) => {
  const useStyles = makeStyles({
    message: {
      display: 'flex',
      alignItems: 'center',
    },
    messageIcon: {
      marginRight: '10px',
    },
  });

  const classes = useStyles();
  return (
    <SnackbarContent
      {...props}
      action={props.action}
      message={
        <span className={classes.message}>
          <span className={classes.messageIcon}>
            <Icon name="filled-brand-naturarosacea" size="small" />
          </span>
          {props.message}
        </span>
      }
    />
  );
};

const SnackbarMultiLineText = (props: any) => {
  const useStyles = makeStyles({
    message: {
      display: 'flex',
      alignItems: 'center',
    },
    root: {
      maxWidth: '288px',
    },
  });

  const classes = useStyles();
  return (
    <SnackbarContent
      {...props}
      className={classes.root}
      message={<span className={classes.message}>{props.message}</span>}
    />
  );
};

export const colors = [
  {
    title: 'default',
    component: <SnackbarContentWrapper color="default" />,
  },
  {
    title: 'error',
    component: <SnackbarContentWrapper color="error" />,
  },
  {
    title: 'success',
    component: <SnackbarContentWrapper color="success" />,
  },
  {
    title: 'warning',
    component: <SnackbarContentWrapper color="warning" />,
  },
  {
    title: 'info',
    component: <SnackbarContentWrapper color="info" />,
  },
];

export const examples = [
  {
    title: 'with button',
    component: (
      <SnackbarButtonExample
        action={
          <Button variant="text" color="inherit">
            button
          </Button>
        }
        message={<Typography variant="body2">This is a message</Typography>}
      />
    ),
  },
  {
    title: 'multiline text',
    component: (
      <SnackbarMultiLineText
        message={
          <Typography variant="body2">
            This is a really long message to see how it works on multiline
          </Typography>
        }
      />
    ),
  },
];
