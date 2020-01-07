import * as React from 'react';
import MaterialAppBar, { AppBarProps } from '@material-ui/core/AppBar';
import { withTheme, makeStyles } from '@material-ui/core/styles';
import { IThemeWeb } from '../Themes';
import { getDefaultTheme } from './shared';

export interface IAppBarProps extends AppBarProps {
  /**
   * @optional
   */
  theme: IThemeWeb | unknown;
  /**
   * @optional
   * @default false
   * Removes the box-shadow from the container
   */
  noElevation?: boolean;
}

export const AppBar: React.FC<IAppBarProps> = (props:IAppBarProps) => {
  const {
    theme: providerTheme,
    classes,
    noElevation = false
  } = props;

  const theme: any = React.useMemo(() => getDefaultTheme(providerTheme), [providerTheme]);

  const useStyles = React.useMemo(() => makeStyles({
    root: {
      boxShadow: noElevation ? 'none' : undefined
    },
    colorDefault: {
      backgroundColor: theme.palette.background.default,
      color: theme.palette.background.defaultContrastText,
    }
  }), [theme]);

  const customClasses = useStyles();

  return <MaterialAppBar  {...props} classes={{...customClasses, ...classes}} />;
};

export default withTheme(AppBar);
