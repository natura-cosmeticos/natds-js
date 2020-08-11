/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from "react";
import MaterialFab from "@material-ui/core/Fab";
import useTheme from "@material-ui/core/styles/useTheme";
import {PropTypes} from "@material-ui/core";
import {
  colors, defaultProps, IFabColor, IFabProps,
} from "./IFabProps";
import {makeFabStyles} from "./Fab.styles";

const getColorProp: (color: IFabColor) => ("primary" | "secondary" | "default" | string) = (color: IFabColor) => {
  switch (color) {
  case colors.primary: return colors.primary;
  case colors.secondary: return colors.secondary;
  case colors.light: return "default";
  default: return "default";
  }
};

const Fab : (props: IFabProps, ref: any) => JSX.Element = (props: IFabProps, ref: any) => {

  const {
    color = defaultProps.color,
    disabled,
  } = props;

  const theme = useTheme();
  const useStyles = makeFabStyles(theme);
  const classes = useStyles();

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  return <MaterialFab
    {...props}
    classes={classes}
    color={getColorProp(color) as PropTypes.Color}
    disabled={disabled}
    ref={ref}
  />;
};

const DefaultFab = React.forwardRef<HTMLElement, IFabProps>(Fab);

DefaultFab.defaultProps = {
  color: colors.primary,
  disabled: false,
};
DefaultFab.displayName = "Fab";

export default DefaultFab;
