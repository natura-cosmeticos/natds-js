import React, { FunctionComponent, forwardRef } from 'react';
import MaterialBottomNavigationAction, { BottomNavigationActionProps } from '@material-ui/core/BottomNavigationAction';
import { withTheme, makeStyles } from '@material-ui/core/styles';
import { getDefaultTheme } from './shared';
import { IThemeWeb } from '../Themes';

export interface IBottomNavigationActionProps extends BottomNavigationActionProps {
  /**
   * @optional
   */
  theme?: IThemeWeb | unknown;
}

export const BottomNavigationAction: FunctionComponent<IBottomNavigationActionProps> = forwardRef((
  props: IBottomNavigationActionProps,
  ref: any
) => {
  const {
    theme: providerTheme
  } = props;

  const theme = React.useMemo(() => {
    return getDefaultTheme(providerTheme);
  },[providerTheme]);

  const useStyles = React.useMemo(() => {
    const { text } = theme.palette;
    const { typography: { caption } } = theme;

    return makeStyles({
      selected: {
        color: text.primary,
      },
      label: {
        '&$selected': {
          fontSize: caption.fontSize,
        }
      }
    });
  },[theme]);

  const classes = useStyles();

  return <MaterialBottomNavigationAction {...props} classes={classes} ref={ref} />;
});

export default withTheme(BottomNavigationAction);
