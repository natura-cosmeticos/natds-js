import React, { FunctionComponent, forwardRef } from 'react';
import MaterialSnackbarContent, {
  SnackbarContentProps,
} from '@material-ui/core/SnackbarContent';
import { withTheme, makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';

import { IThemeWeb } from '../Themes';
import { getDefaultTheme } from './shared';

type ISnackbarContentColors =
  | 'default'
  | 'info'
  | 'warning'
  | 'error'
  | 'success';

export interface ISnackbarContentProps
  extends Omit<SnackbarContentProps, 'theme' | 'color'> {
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
  ref: any
) => {
  const { color = 'default', theme: providerTheme, className, ...rest } = props;

  const theme: any = React.useMemo(() => {
    return getDefaultTheme(providerTheme);
  }, [providerTheme]);

  const useStyles = React.useMemo(() => {
    const { complementary, error, success, background } = theme.palette;

    return makeStyles({
      default: {
        backgroundColor: background.paperContrastText,
        color: background.paper,
      },
      info: {
        backgroundColor: complementary.link,
        color: complementary.linkContrastText,
      },
      warning: {
        backgroundColor: complementary.warning,
        color: complementary.warningContrastText,
      },
      error: {
        backgroundColor: error.main,
        color: error.contrastText,
      },
      success: {
        backgroundColor: success.main,
        color: success.contrastText,
      },
    });
  }, [theme]);

  const classes = useStyles();

  return (
    <MaterialSnackbarContent
      {...rest}
      className={clsx(classes[color], className)}
      ref={ref}
    />
  );
});

export default withTheme(SnackbarContent);
