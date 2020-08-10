import * as React from "react";
import { withTheme } from "@material-ui/core/styles";
import MaterialFab from "@material-ui/core/Fab";
import { IFabProps } from "./IFabProps";

export { IFabProps } from "./IFabProps";

export const colors: { secondary: string; light: string; primary: string } = {
  primary: "primary",
  secondary: "secondary",
  light: "light",
};

export const sizes: { small: string; large: string; medium: string } = {
  small: "small",
  medium: "medium",
  large: "large",
};

export const variants: { round: string; extended: string } = {
  round: "round",
  extended: "extended",
};

export const Fab: React.FunctionComponent<IFabProps> = React.forwardRef((
  props: IFabProps,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ref: any,
) => {

  const {
    color = "primary",
    theme: providerTheme,
    disabled,
    style,
  } = props;

  const colorMap = React.useMemo(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const { palette } = providerTheme as any;

    return {
      light: {
        backgroundColor: palette.background.default,
        color: palette.background.defaultContrastText,
      },
      primary: {
        backgroundColor: palette.primary.main,
        color: palette.primary.contrastText,
      },
      secondary: {
        backgroundColor: palette.secondary.main,
        color: palette.secondary.contrastText,
      },
    };
  }, [providerTheme]);

  let colorStyle = {};

  if (!disabled) {
    colorStyle = colorMap[color];
  }

  /**
   * @todo fix(web): TS2769 No overload matches this call on Fab component
   */
  return (
    // @ts-ignore
    <MaterialFab
      {...props}
      color="inherit"
      ref={ref}
      style={{
        ...colorStyle,
        ...style,
      }}
    />
  );
});

Fab.displayName = "Fab";

export default withTheme(Fab);
