import React, { FunctionComponent, forwardRef } from 'react';
import MaterialAppBar, { AppBarProps } from '@material-ui/core/AppBar';
import { withTheme, makeStyles } from '@material-ui/core/styles';
import { IThemeWeb } from '../Themes';
import { getDefaultTheme } from './shared';

export interface IAppBarProps extends AppBarProps {
  /**
   * @optional
   */
  theme: IThemeWeb | unknown;
}

const defaultAppBarElevation = 2;

export const AppBar: FunctionComponent<IAppBarProps> = forwardRef((
  props: Omit<IAppBarProps, 'translate'>,
  ref: any
) => {
  const {
    elevation,
    theme: providerTheme,
    classes,
  } = props;

  const theme: any  = React.useMemo(() => getDefaultTheme(providerTheme), [providerTheme]);

  const useStyles = React.useMemo(() => makeStyles({
    colorDefault: {
      backgroundColor: theme.palette.background.paper,
      color: theme.palette.background.paperContrastText,
    }
  }), [theme]);

  const customClasses = useStyles();

  return <MaterialAppBar
    {...props}
    classes={{...customClasses, ...classes}}
    elevation={!elevation && elevation !== 0 ? defaultAppBarElevation : elevation}
    ref={ref}
  />;
});

export default withTheme(AppBar);
