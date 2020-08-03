import * as React from "react";
import {boolean, number, select} from "@storybook/addon-knobs";
import {makeStyles} from "@material-ui/core/styles";
import clsx from "clsx";
import { getDefaultDecorators, getComponentParams } from "../../../.storybook";
import {colors, optionsElevation, positions} from ".";

const AppBar = React.lazy(() => import("."));
const Button = React.lazy(() => import("../Button"));
const Icon = React.lazy(() => import("../Icon"));
const IconButton = React.lazy(() => import("../IconButton"));
const Toolbar = React.lazy(() => import("../Toolbar"));
const Typography = React.lazy(() => import("../Typography"));

export default {
  title: "Playground|AppBar",
  component: AppBar,
  decorators: getDefaultDecorators(),
  parameters: getComponentParams(["AppBar"]),
};

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const Interactive = () => {

  const prominent = boolean("prominent (not a property, check docs)", false);

  const useStyles = makeStyles((theme) => ({
    menuButton: {
      // eslint-disable-next-line no-magic-numbers
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }));

  const useProminentStyles = makeStyles((theme) => ({
    title: {
      flexGrow: 1,
      alignSelf: "flex-end",
    },
    toolbar: {
      // eslint-disable-next-line no-magic-numbers
      minHeight: theme.spacing(16) - theme.spacing(2),
      alignItems: "flex-start",
      // eslint-disable-next-line no-magic-numbers
      paddingTop: theme.spacing(1),
      // eslint-disable-next-line no-magic-numbers
      paddingBottom: theme.spacing(1),
    },
  }));

  const classes = useStyles();
  const prominentClasses = useProminentStyles();

  return (
    <React.Suspense fallback={<progress>Loading...</progress>}>
      <AppBar color={select("color", colors, colors.primary)}
        elevation={number("elevation", optionsElevation.value, optionsElevation)}
        position={select("position", positions, positions.static)}>
        <Toolbar className={clsx(prominent && prominentClasses.toolbar)}>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <Icon name="filled-navigation-menu" size="tiny" />
          </IconButton>
          <Typography variant="h6" className={prominent ? prominentClasses.title : classes.title}>
          News
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </React.Suspense>
  );
};
