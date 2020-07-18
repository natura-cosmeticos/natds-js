import React, { FunctionComponent, forwardRef } from "react";
import MaterialSnackbarContent, {
  SnackbarContentProps,
} from "@material-ui/core/SnackbarContent";
import { makeStyles, withTheme } from "@material-ui/core/styles";
import clsx from "clsx";

import { IThemeWeb } from "../Themes";
import { getDefaultTheme } from "./shared";

type ISnackbarContentColors =
  | "default"
  | "info"
  | "warning"
  | "error"
  | "success";

export interface ISnackbarContentProps
  extends Omit<SnackbarContentProps, "theme" | "color"> {

  /**
   * @optional
   */
  theme?: IThemeWeb | unknown;

  /**
   * @optional
   * @default 'default'
   * The color to apply to the background based on the theme
   */
  color?: ISnackbarContentColors;
}

export const SnackbarContent: FunctionComponent<ISnackbarContentProps> = forwardRef((
  props: ISnackbarContentProps,
  ref: any,
) => {
  const {
      color = "default", theme: providerTheme, className, ...rest
    } = props,

    theme: any = React.useMemo(() => getDefaultTheme(providerTheme), [providerTheme]),

    useStyles = React.useMemo(() => {
      const {
        complementary, error, success, background,
      } = theme.palette;

      return makeStyles({
        default: {
          backgroundColor: background.paperContrastText,
          color: background.paper,
        },
        error: {
          backgroundColor: error.main,
          color: error.contrastText,
        },
        info: {
          backgroundColor: complementary.link,
          color: complementary.linkContrastText,
        },
        success: {
          backgroundColor: success.main,
          color: success.contrastText,
        },
        warning: {
          backgroundColor: complementary.warning,
          color: complementary.warningContrastText,
        },
      });
    }, [theme]),

    classes = useStyles();

  return (
    <MaterialSnackbarContent
      {...rest}
      className={clsx(classes[color], className)}
      ref={ref}
    />
  );
});

export default withTheme(SnackbarContent);
