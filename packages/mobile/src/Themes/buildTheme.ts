import { IThemeShape } from '../Provider/IThemeShape';
import { DefaultTheme } from 'react-native-paper';
import { IThemeMobile } from 'Themes';

const remToPx = (rem: string): number => {
  rem = String(rem);
  if (rem.includes('rem')) {
    const remValue = rem.split('rem')[0];
    return Number(remValue) * 16;
  } else {
    return Number(rem);
  }
};

export function buildTheme(
  theme: IThemeMobile | undefined,
  defaultTheme: IThemeMobile
): IThemeShape {
  const provider = theme ? theme : defaultTheme;
  const {
    palette = {},
    shape,
    typography,
    spacing,
    avatarSizes,
    buttonSize,
  } = provider;

  const {
    primary: { main: primary } = { main: undefined },
    secondary: { main: secondary } = { main: undefined },
    error: { main: error } = { main: undefined },
    background = {},
    text = {},
    success: { main: success } = { main: undefined },
    complementary
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
    success: success ? success : '#569A32',
    background: background.default
      ? background.default
      : defaultColors.backdrop,
    surface: background.paper ? background.paper : defaultColors.surface,
    text: text.primary ? text.primary : defaultColors.text,
    textSecondary: text.secondary ? text.secondary : '#777777',
    textHint: text.hint ? text.hint : '#BBBBBB',
    onBackground: text.primary ? text.primary : defaultColors.onBackground,
    onSurface: text.secondary ? text.secondary : defaultColors.onSurface,
    disabled: text.disabled ? text.disabled : defaultColors.disabled,
    placeholder: text.hint ? text.hint : defaultColors.placeholder,
    link: complementary ? complementary.link : '#227BBD',
    warning: complementary ? complementary.warning : '#FCC433',
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
        fontSize: remToPx(typography.h1
          ? typography.h1.fontSize
          : defaultTypography.h1.fontSize),
        fontFamily: typography.fontFamily
          ? typography.fontFamily
          : defaultTypography.h1.fontFamily,
        fontWeight: typography.h1
          ? typography.h1.fontWeight
          : defaultTypography.h1.fontWeight,
      },
      h2: {
        fontSize: remToPx(typography.h2
          ? typography.h2.fontSize
          : defaultTypography.h2.fontSize),
        fontFamily: typography.fontFamily
          ? typography.fontFamily
          : defaultTypography.h2.fontFamily,
        fontWeight: typography.h2
          ? typography.h2.fontWeight
          : defaultTypography.h2.fontWeight,
      },
      h3: {
        fontSize: remToPx(typography.h3
          ? typography.h3.fontSize
          : defaultTypography.h3.fontSize),
        fontFamily: typography.fontFamily
          ? typography.fontFamily
          : defaultTypography.h3.fontFamily,
        fontWeight: typography.h3
          ? typography.h3.fontWeight
          : defaultTypography.h3.fontWeight,
      },
      h4: {
        fontSize: remToPx(typography.h4
          ? typography.h4.fontSize
          : defaultTypography.h4.fontSize),
        fontFamily: typography.fontFamily
          ? typography.fontFamily
          : defaultTypography.h4.fontFamily,
        fontWeight: typography.h4
          ? typography.h4.fontWeight
          : defaultTypography.h4.fontWeight,
      },
      h5: {
        fontSize: remToPx(typography.h5
          ? typography.h5.fontSize
          : defaultTypography.h5.fontSize),
        fontFamily: typography.fontFamily
          ? typography.fontFamily
          : defaultTypography.h5.fontFamily,
        fontWeight: typography.h5
          ? typography.h5.fontWeight
          : defaultTypography.h5.fontWeight,
      },
      h6: {
        fontSize: remToPx(typography.h6
          ? typography.h6.fontSize
          : defaultTypography.h6.fontSize),
        fontFamily: typography.fontFamily
          ? typography.fontFamily
          : defaultTypography.h6.fontFamily,
        fontWeight: typography.h6
          ? typography.h6.fontWeight
          : defaultTypography.h6.fontWeight,
      },
      body1: {
        fontSize: remToPx(typography.body1
          ? typography.body1.fontSize
          : defaultTypography.body1.fontSize),
        fontFamily: typography.fontFamily
          ? typography.fontFamily
          : defaultTypography.body1.fontFamily,
        fontWeight: typography.body1
          ? typography.body1.fontWeight
          : defaultTypography.body1.fontWeight,
      },
      body2: {
        fontSize: remToPx(typography.body2
          ? typography.body2.fontSize
          : defaultTypography.body2.fontSize),
        fontFamily: typography.fontFamily
          ? typography.fontFamily
          : defaultTypography.body2.fontFamily,
        fontWeight: typography.body2
          ? typography.body2.fontWeight
          : defaultTypography.body2.fontWeight,
      },
      subtitle1: {
        fontSize: remToPx(typography.subtitle1
          ? typography.subtitle1.fontSize
          : defaultTypography.subtitle1.fontSize),
        fontFamily: typography.fontFamily
          ? typography.fontFamily
          : defaultTypography.subtitle1.fontFamily,
        fontWeight: typography.subtitle1
          ? typography.subtitle1.fontWeight
          : defaultTypography.subtitle1.fontWeight,
      },
      subtitle2: {
        fontSize: remToPx(typography.subtitle2
          ? typography.subtitle2.fontSize
          : defaultTypography.subtitle2.fontSize),
        fontFamily: typography.fontFamily
          ? typography.fontFamily
          : defaultTypography.subtitle2.fontFamily,
        fontWeight: typography.subtitle2
          ? typography.subtitle2.fontWeight
          : defaultTypography.subtitle2.fontWeight,
      },
      caption: {
        fontSize: remToPx(typography.caption
          ? typography.caption.fontSize
          : defaultTypography.caption.fontSize),
        fontFamily: typography.fontFamily
          ? typography.fontFamily
          : defaultTypography.caption.fontFamily,
        fontWeight: typography.caption
          ? typography.caption.fontWeight
          : defaultTypography.caption.fontWeight,
      },
      overline: {
        fontSize: remToPx(typography.overline
          ? typography.overline.fontSize
          : defaultTypography.overline.fontSize),
        fontFamily: typography.fontFamily
          ? typography.fontFamily
          : defaultTypography.overline.fontFamily,
        fontWeight: typography.overline
          ? typography.overline.fontWeight
          : defaultTypography.overline.fontWeight,
        textTransform: defaultTypography.overline.textTransform,
      },
      button: {
        fontSize: remToPx(typography.button
          ? typography.button.fontSize
          : defaultTypography.button.fontSize),
        fontFamily: typography.fontFamily
          ? typography.fontFamily
          : defaultTypography.button.fontFamily,
        fontWeight: typography.button
          ? typography.button.fontWeight
          : defaultTypography.button.fontWeight,
        textTransform: defaultTypography.button.textTransform,
      },
    },
    avatarSizes,
    buttonSize,
  };

  return newTheme;
}
