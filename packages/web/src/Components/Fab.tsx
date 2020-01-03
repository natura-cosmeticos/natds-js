import * as React from 'react';
import isEqual from 'lodash/isEqual';
import { withTheme, createMuiTheme } from '@material-ui/core/styles';
import MaterialFab, { FabProps } from '@material-ui/core/Fab';
import { IThemeWeb, themes } from '../Themes';

type IFabColor = 'primary' | 'secondary' | 'light';

export interface IFabProps extends React.HtmlHTMLAttributes<HTMLButtonElement>, Pick<FabProps,
  | 'size'
  | 'href'
  | 'disableFocusRipple'
  | 'variant'
  | 'children'
  | 'disabled'
> {
  /**
   * @optional
   * The color of the component
   */
  color?: IFabColor;
  /**
   * @optional
   */
  theme?: IThemeWeb | unknown;
}

export const Fab: React.FunctionComponent<IFabProps> = (props: IFabProps) => {
  const {
    color = 'primary',
    theme: providerTheme,
    disabled,
    style
  } = props;

  const theme = React.useMemo(() => {
    const parsedProviderTheme = JSON.parse(JSON.stringify(providerTheme));
    const parsedDefaulttheme = JSON.parse(JSON.stringify(createMuiTheme({})));
    return isEqual(parsedProviderTheme, parsedDefaulttheme)
      ? createMuiTheme(themes.natura.light)
      : providerTheme;
  }, [providerTheme]);

  const colorMap = React.useMemo(() => {
    const { palette } = providerTheme as any;
    return {
      primary: {
        backgroundColor: palette.primary.main,
        color: palette.primary.contrastText
      },
      secondary: {
        backgroundColor: palette.secondary.main,
        color: palette.secondary.contrastText
      },
      light: {
        backgroundColor: palette.background.default,
        color: palette.background.defaultContrastText
      }
    };
  }, [theme]);

  return <MaterialFab
    {...props}
    color="inherit"
    style={{
      ...(!disabled ? colorMap[color] : {}),
      ...style
    }}
  />;
};

export default withTheme(Fab);
