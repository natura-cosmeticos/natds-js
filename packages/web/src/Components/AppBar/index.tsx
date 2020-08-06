import React, { FunctionComponent, forwardRef } from "react";
import MaterialAppBar, { AppBarProps } from "@material-ui/core/AppBar";
import { makeStyles, withTheme } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import { IThemeWeb } from "../../Themes";
import { getDefaultTheme } from "../shared";

export const colors: { secondary: string; default: string; inherit: string; primary: string } = {
  default: "default",
  inherit: "inherit",
  primary: "primary",
  secondary: "secondary",
};

export const positions: { static: string; absolute: string; sticky: string; fixed: string; relative: string } = {
  absolute: "absolute",
  fixed: "fixed",
  relative: "relative",
  static: "static",
  sticky: "sticky",
};

export const optionsElevation: { min: number; max: number; range: boolean; step: number; value: number } = {
  range: true,
  min: 0,
  max: 24,
  step: 1,
  value: 2,
};

export interface IAppBarProps extends AppBarProps {

  /**
   * @optional
   */
  theme: IThemeWeb | unknown;
}

const defaultAppBarElevation = 2;

export const AppBar: FunctionComponent<IAppBarProps> = forwardRef((
  props: Omit<IAppBarProps, "translate">,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ref: any,
) => {
  const {
      elevation,
      theme: providerTheme,
      classes,
    } = props,

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    theme: any = React.useMemo(() => getDefaultTheme(providerTheme), [providerTheme]),

    useStyles = React.useMemo(() => makeStyles({
      colorDefault: {
        backgroundColor: theme.palette.background.paper,
        color: theme.palette.background.paperContrastText,
      },
    }), [theme]),

    customClasses = useStyles();

  /**
   * @todo refactor(web): replace elevation magic number by corresponding token
   */
  const NO_ELEVATION = 0;

  return <MaterialAppBar
    {...props}
    classes={{
      ...customClasses,
      ...classes,
    }}
    elevation={!elevation && elevation !== NO_ELEVATION ? defaultAppBarElevation : elevation}
    ref={ref}
  />;
});

AppBar.displayName = "AppBar";

export default withTheme(AppBar);

AppBar.propTypes = {
  children: PropTypes.node,
};
