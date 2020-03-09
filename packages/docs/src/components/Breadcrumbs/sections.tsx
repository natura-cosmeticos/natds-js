import * as React from 'react';
import {
  Breadcrumbs,
  Typography,
  Link,
  Icon,
} from '@naturacosmeticos/natds-web';
import { makeStyles } from '@material-ui/core/styles';

interface IBreadcrumbsWrapper {
  separator?: string;
}

const BreadcrumbsWrapper = (props: IBreadcrumbsWrapper) => {
  const { separator } = props;

  return (
    <Breadcrumbs aria-label="breadcrumb" separator={separator}>
      <Link color="inherit" href="/">
        <Typography>Material-UI</Typography>
      </Link>
      <Link color="inherit" href="/getting-started/installation/">
        <Typography>Core</Typography>
      </Link>
      <Link color="default" href="/getting-started/installation/">
        <Typography>Breadcrumb</Typography>
      </Link>
    </Breadcrumbs>
  );
};

const BreadcrumbsIconsWrapper = (props: IBreadcrumbsWrapper) => {
  const useStyles = makeStyles(theme => ({
    link: {
      display: 'flex',
    },
    label: {
      '&:hover': {
        textDecoration: 'underline',
      },
    },
  }));

  const classes = useStyles();

  return (
    <Breadcrumbs aria-label="breadcrumb">
      <Link color="inherit" href="#" underline="none" className={classes.link}>
        <Icon name="outlined-action-history" size="tiny" />
        <Typography className={classes.label}>Material-UI</Typography>
      </Link>
      <Link color="inherit" href="#" underline="none" className={classes.link}>
        <Icon name="outlined-action-done" size="tiny" />
        <Typography className={classes.label}>Core</Typography>
      </Link>
      <Link color="default" href="#" underline="none" className={classes.link}>
        <Icon name="outlined-action-add" size="tiny" />
        <Typography className={classes.label}>Breadcrumb</Typography>
      </Link>
    </Breadcrumbs>
  );
};

export const separators = [
  {
    title: ' ',
    component: <BreadcrumbsWrapper separator="/" />,
  },
  {
    title: ' ',
    component: <BreadcrumbsWrapper separator="-" />,
  },
  {
    title: ' ',
    component: <BreadcrumbsWrapper separator=">" />,
  },
];

export const icons = [
  {
    title: ' ',
    component: <BreadcrumbsIconsWrapper />,
  },
];
