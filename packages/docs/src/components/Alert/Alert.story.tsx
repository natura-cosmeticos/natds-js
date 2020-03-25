import * as React from "react";
import { Alert, Icon, AlertTitle } from "@naturacosmeticos/natds-web";
import withJest from "@decorators/jest/jest";
import { makeStyles } from "@material-ui/core/styles";
import withContainer from "@decorators/container/container";
import { iconNames } from "@naturacosmeticos/natds-icons";
import { select, boolean } from "@storybook/addon-knobs";

import AlertDocs from './Alert.docs.mdx';

export default {
  title: "Components|Alert",
  component: Alert,
  decorators: [withJest(), withContainer],
  parameters: {
    jestImportPath: "web",
    jest: ["Alert"],
    theme: {
      context: "web"
    },
    docs: {
      page: AlertDocs
    },
  }
};

const variants: any = {
  filled: "filled",
  outlined: "outlined",
  standard: "standard"
};

const severities: any = {
  info: "info",
  error: "error",
  warning: "warning",
  success: "success"
};

const icons: any = Object.keys(iconNames);

const useStyles = makeStyles(theme => ({
  root: {
    minWidth: "320px"
  },
}));

export const Interactive = () => {
  const withTitle = boolean("with title", true);

  const customIcon = boolean("custom icon", false);

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Alert
        icon={customIcon ? <Icon size="tiny" name={select("icon name", icons, icons[0])} /> : undefined}
        variant={select("variant", variants, variants.standard)}
        severity={select("severity", severities, severities.success)}
      >
        <AlertTitle>{withTitle && "This is the title message"}</AlertTitle>
        This is the body message
      </Alert>
    </div>
  );
};
