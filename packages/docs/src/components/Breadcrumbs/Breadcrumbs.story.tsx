import * as React from "react";
import {
  text, boolean, select, number,
} from "@storybook/addon-knobs";
import withJest from "@decorators/jest/jest";
import withContainer from "@decorators/container/withContainer";
import { iconNames } from "@naturacosmeticos/natds-icons";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";

import {
  Breadcrumbs,
  Typography,
  Link,
  Icon,
} from "@naturacosmeticos/natds-web";

import BreadcrumbsDocs from "./Breadcrumbs.docs.mdx";

export default {
  title: "Components|Breadcrumbs",
  component: Breadcrumbs,
  decorators: [
    withJest(), withContainer,
  ],
  parameters: {
    jestImportPath: "web",
    jest: ["Breadcrumbs"],
    theme: {
      context: "web",
    },
    docs: {
      page: BreadcrumbsDocs,
    },
  },
};

const handleClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
  event.preventDefault();
};

const icons: any = Object.keys(iconNames);

const useStyles = makeStyles((theme: Theme) => createStyles({
  link: {
    display: "flex",
  },
  label: {
    "&:hover": {
      textDecoration: "underline",
    },
  },
  icon: {
    marginRight: "4px",
  },
}));

export const Interactive = () => <Breadcrumbs aria-label="breadcrumb" separator={text("Separador", "/")}>
  <Link color="inherit" href="#" onClick={handleClick}>
      Material-UI
  </Link>
  <Link color="inherit" href="#" onClick={handleClick}>
      Core
  </Link>
  <Typography color="textPrimary">Breadcrumb</Typography>
</Breadcrumbs>;
export const IconBreadcrumbs = () => {
  const classes = useStyles();

  return (
    <Breadcrumbs aria-label="breadcrumb">
      <Link
        className={classes.link}
        color="inherit"
        href="/"
        onClick={handleClick}
        underline="none"
      >
        <Icon
          name={select("First Icon", icons, icons[0])}
          size="tiny"
          className={classes.icon}
        />
        <Typography className={classes.label}>Material-UI</Typography>
      </Link>
      <Link
        className={classes.link}
        color="inherit"
        href="/getting-started/installation/"
        onClick={handleClick}
        underline="none"
      >
        <Icon
          name={select("Second Icon", icons, icons[0])}
          size="tiny"
          className={classes.icon}
        />
        <Typography className={classes.label}>Core</Typography>
      </Link>
      <Link
        color="default"
        href="/components/breadcrumbs/"
        onClick={handleClick}
        aria-current="page"
      >
        <Typography className={classes.label}>Breadcrumb</Typography>
      </Link>
    </Breadcrumbs>
  );
};
