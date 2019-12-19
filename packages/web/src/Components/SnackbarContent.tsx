import * as React from 'react';
import isEqual from 'lodash/isEqual';
import MaterialSnackbarContent, { SnackbarContentProps } from '@material-ui/core/SnackbarContent';
import { withTheme, createMuiTheme, makeStyles } from '@material-ui/core/styles';
import { IThemeWeb, themes } from '../Themes';
import clsx from 'clsx';

type ISnackbarContentColors = 'default' | 'info' | 'warning' | 'error' | 'success' ;

export interface ISnackbarContentProps extends Omit<SnackbarContentProps, 'theme' | 'color'> {
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

export const SnackbarContent: React.FC<ISnackbarContentProps> = (props: ISnackbarContentProps) => {
  const {
    color = 'default',
    theme: providerTheme,
    className,
    ...rest
  } = props;

  const theme: any = React.useMemo(() => {
    const parsedProviderTheme = JSON.parse(JSON.stringify(providerTheme));
    const parsedDefaulttheme = JSON.parse(JSON.stringify(createMuiTheme({})));
    return isEqual(parsedProviderTheme, parsedDefaulttheme)
      ? createMuiTheme(themes.natura.light)
      : providerTheme;
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
        color: complementary.linkContrastText
      },
      warning: {
        backgroundColor: complementary.warning,
        color: complementary.warningContrastText
      },
      error: {
        backgroundColor: error.main,
        color: error.contrastText
      },
      success: {
        backgroundColor: success.main,
        color: success.contrastText
      }
    });
  }, [theme]);

  const classes = useStyles();

  return <MaterialSnackbarContent  {...rest} className={clsx(classes[color], className)} />;
};

export default withTheme(SnackbarContent);
