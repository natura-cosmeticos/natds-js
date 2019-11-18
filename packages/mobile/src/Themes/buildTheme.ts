import { IThemeShape } from '../Provider/IThemeShape';
import { DefaultTheme } from 'react-native-paper';
import { IThemeMobile } from 'Themes';

export function buildTheme(
  theme: IThemeMobile | undefined,
  defaultTheme: IThemeMobile
): IThemeShape {
  const provider = theme ? theme : defaultTheme;
  const { palette = {}, shape, typography, spacing } = provider;

  const {
    primary: { main: primary } = { main: undefined },
    secondary: { main: secondary } = { main: undefined },
    error: { main: error } = { main: undefined },
    background = {},
    text = {},
  } = palette;

  const defaultColors = DefaultTheme.colors;

  /**
   * Defined by Material UI Theme
   */
  const defaultTypography = {
    h1: {
      fontFamily: '"System", sans-serif',
      fontWeight: 300,
      fontSize: '6rem',
    },
    h2: {
      fontFamily: '"System", sans-serif',
      fontWeight: 300,
      fontSize: '3.75rem',
    },
    h3: {
      fontFamily: '"System", sans-serif',
      fontWeight: 400,
      fontSize: '3rem',
    },
    h4: {
      fontFamily: '"System", sans-serif',
      fontWeight: 400,
      fontSize: '2.125rem',
    },
    h5: {
      fontFamily: '"System", sans-serif',
      fontWeight: 400,
      fontSize: '1.5rem',
    },
    h6: {
      fontFamily: '"System", sans-serif',
      fontWeight: 600,
      fontSize: '1.25rem',
    },
    subtitle1: {
      fontFamily: '"System", sans-serif',
      fontWeight: 400,
      fontSize: '1rem',
    },
    subtitle2: {
      fontFamily: '"System", sans-serif',
      fontWeight: 500,
      fontSize: '0.875rem',
    },
    body1: {
      fontFamily: '"System", sans-serif',
      fontWeight: 400,
      fontSize: '1rem',
    },
    body2: {
      fontFamily: '"System", sans-serif',
      fontWeight: 400,
      fontSize: '0.875rem',
    },
    button: {
      fontFamily: '"System", sans-serif',
      fontWeight: 600,
      fontSize: '0.875rem',
      textTransform: 'uppercase',
    },
    caption: {
      fontFamily: '"System", sans-serif',
      fontWeight: 400,
      fontSize: '0.75rem',
    },
    overline: {
      fontFamily: '"System", sans-serif',
      fontWeight: 400,
      fontSize: '0.75rem',
      textTransform: 'uppercase',
    },
  };

  const colors = {
    primary: primary ? primary : defaultColors.primary,
    accent: secondary ? secondary : defaultColors.accent,
    secondary: secondary ? secondary : defaultColors.accent,
    error: error ? error : defaultColors.error,
    background: background.default
      ? background.default
      : defaultColors.backdrop,
    surface: background.paper ? background.paper : defaultColors.surface,
    text: text.primary ? text.primary : defaultColors.text,
    onBackground: text.primary ? text.primary : defaultColors.onBackground,
    onSurface: text.secondary ? text.secondary : defaultColors.onSurface,
    disabled: text.disabled ? text.disabled : defaultColors.disabled,
    placeholder: text.hint ? text.hint : defaultColors.placeholder,
  };

  const roundness =
    shape && shape.borderRadius ? shape.borderRadius : DefaultTheme.roundness;

  const isDarkMode = palette.type === 'dark';

  const newTheme: IThemeShape = {
    ...DefaultTheme,
    spacing,
    dark: isDarkMode,
    roundness,
    colors: {
      ...DefaultTheme.colors,
      ...colors,
    },
    fonts: {
      regular: {
        fontFamily: typography.fontFamily ? typography.fontFamily : 'System',
        fontWeight: typography.fontWeightRegular
          ? (typography.fontWeightRegular.toString() as '400')
          : ('400' as '400'),
      },
      medium: {
        fontFamily: typography.fontFamily ? typography.fontFamily : 'System',
        fontWeight: typography.fontWeightMedium
          ? (typography.fontWeightMedium.toString() as '500')
          : ('500' as '500'),
      },
      light: {
        fontFamily: typography.fontFamily ? typography.fontFamily : 'System',
        fontWeight: typography.fontWeightLight
          ? (typography.fontWeightLight.toString() as '300')
          : ('300' as '300'),
      },
      thin: {
        fontFamily: typography.fontFamily ? typography.fontFamily : 'System',
        fontWeight: typography.fontWeightLight
          ? (typography.fontWeightLight.toString() as '100')
          : ('100' as '100'),
      },
    },
    typography: {
      h1: {
        fontSize: typography.h1
          ? typography.h1.fontSize
          : defaultTypography.h1.fontSize,
        fontFamily: typography.fontFamily
          ? typography.fontFamily
          : defaultTypography.h1.fontFamily,
        fontWeight: defaultTypography.h1.fontWeight,
      },
      h2: {
        fontSize: typography.h2
          ? typography.h2.fontSize
          : defaultTypography.h2.fontSize,
        fontFamily: typography.fontFamily
          ? typography.fontFamily
          : defaultTypography.h2.fontFamily,
        fontWeight: defaultTypography.h2.fontWeight,
      },
      h3: {
        fontSize: typography.h3
          ? typography.h3.fontSize
          : defaultTypography.h3.fontSize,
        fontFamily: typography.fontFamily
          ? typography.fontFamily
          : defaultTypography.h3.fontFamily,
        fontWeight: defaultTypography.h3.fontWeight,
      },
      h4: {
        fontSize: typography.h4
          ? typography.h4.fontSize
          : defaultTypography.h4.fontSize,
        fontFamily: typography.fontFamily
          ? typography.fontFamily
          : defaultTypography.h4.fontFamily,
        fontWeight: defaultTypography.h4.fontWeight,
      },
      h5: {
        fontSize: typography.h5
          ? typography.h5.fontSize
          : defaultTypography.h5.fontSize,
        fontFamily: typography.fontFamily
          ? typography.fontFamily
          : defaultTypography.h5.fontFamily,
        fontWeight: defaultTypography.h5.fontWeight,
      },
      h6: {
        fontSize: typography.h6
          ? typography.h6.fontSize
          : defaultTypography.h6.fontSize,
        fontFamily: typography.fontFamily
          ? typography.fontFamily
          : defaultTypography.h6.fontFamily,
        fontWeight: defaultTypography.h6.fontWeight,
      },
      body1: {
        fontSize: typography.body1
          ? typography.body1.fontSize
          : defaultTypography.body1.fontSize,
        fontFamily: typography.fontFamily
          ? typography.fontFamily
          : defaultTypography.body1.fontFamily,
        fontWeight: defaultTypography.body1.fontWeight,
      },
      body2: {
        fontSize: typography.body2
          ? typography.body2.fontSize
          : defaultTypography.body2.fontSize,
        fontFamily: typography.fontFamily
          ? typography.fontFamily
          : defaultTypography.body2.fontFamily,
        fontWeight: defaultTypography.body2.fontWeight,
      },
      subtitle1: {
        fontSize: typography.subtitle1
          ? typography.subtitle1.fontSize
          : defaultTypography.subtitle1.fontSize,
        fontFamily: typography.fontFamily
          ? typography.fontFamily
          : defaultTypography.subtitle1.fontFamily,
        fontWeight: defaultTypography.subtitle1.fontWeight,
      },
      subtitle2: {
        fontSize: typography.subtitle2
          ? typography.subtitle2.fontSize
          : defaultTypography.subtitle2.fontSize,
        fontFamily: typography.fontFamily
          ? typography.fontFamily
          : defaultTypography.subtitle2.fontFamily,
        fontWeight: defaultTypography.subtitle2.fontWeight,
      },
      caption: {
        fontSize: typography.caption
          ? typography.caption.fontSize
          : defaultTypography.caption.fontSize,
        fontFamily: typography.fontFamily
          ? typography.fontFamily
          : defaultTypography.caption.fontFamily,
        fontWeight: defaultTypography.caption.fontWeight,
      },
      overline: {
        fontSize: typography.overline
          ? typography.overline.fontSize
          : defaultTypography.overline.fontSize,
        fontFamily: typography.fontFamily
          ? typography.fontFamily
          : defaultTypography.overline.fontFamily,
        fontWeight: defaultTypography.overline.fontWeight,
        textTransform: defaultTypography.overline.textTransform,
      },
      button: {
        fontSize: typography.button
          ? typography.button.fontSize
          : defaultTypography.button.fontSize,
        fontFamily: typography.fontFamily
          ? typography.fontFamily
          : defaultTypography.button.fontFamily,
        fontWeight: defaultTypography.button.fontWeight,
        textTransform: defaultTypography.button.textTransform,
      },
    },
  };

  return newTheme;
}
