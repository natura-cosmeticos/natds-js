import React, { FunctionComponent, forwardRef } from "react";
import MaterialAppBar, { AppBarProps } from "@material-ui/core/AppBar";
import { makeStyles, withTheme } from "@material-ui/core/styles";
import { IThemeWeb } from "../Themes";
import { getDefaultTheme } from "./shared";

export interface IAppBarProps extends AppBarProps {

  /**
   * @optional
   */
  theme: IThemeWeb | unknown;
}

const defaultAppBarElevation = 2;

export const AppBar: FunctionComponent<IAppBarProps> = forwardRef((
  props: Omit<IAppBarProps, "translate">,
  ref: any
) => {
  const {
      elevation,
      "theme": providerTheme,
      classes
    } = props,

    theme: any = React.useMemo(() => getDefaultTheme(providerTheme), [providerTheme]),

    useStyles = React.useMemo(() => makeStyles({
      "colorDefault": {
        "backgroundColor": theme.palette.background.paper,
        "color": theme.palette.background.paperContrastText
      }
    }), [theme]),

    customClasses = useStyles();

  /**
   * @todo refactor(web): replace elevation magic number by corresponding token
   */
  const NO_ELEVATION = 0;

  return <MaterialAppBar
    {...props}
    classes={{...customClasses,
      ...classes}}
    elevation={!elevation && elevation !== NO_ELEVATION ? defaultAppBarElevation : elevation}
    ref={ref}
  />;
});

export default withTheme(AppBar);
