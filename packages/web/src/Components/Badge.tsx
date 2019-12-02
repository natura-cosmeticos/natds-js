import * as React from 'react';
import styled from 'styled-components';
import { withTheme, createMuiTheme } from '@material-ui/core';
import { IThemeWeb, themes } from '../Themes';

type IBadgeColors = 'primary' | 'secondary' | 'info' | 'error' | 'warning' | 'success' | 'light' | 'dark';

export interface IBadgeProps {
  [propName: string]: any;
  /**
   * The input id property
   */
  id: string;
  /**
   * @optional
   */
  theme?: IThemeWeb | unknown;
  /**
   * @optional
   * Color of the badge. Defaults to 'primary'
   */
  color?: IBadgeColors;
  /**
   * Classes to be used on the badge
   */
  classes?: string;
  /**
   * Style to be used on the badge
   */
  style?: React.CSSProperties;
  /**
   * Elements to be placed inside the badge
   */
  children?: React.ReactNode;
}

const Badge: React.FunctionComponent<IBadgeProps> = (props: IBadgeProps) => {
  const {
    theme: providerTheme,
    color = 'primary',
    classes,
    style,
    children,
    ...rest
  } = props;

  const theme: any = React.useMemo(() =>
    providerTheme === createMuiTheme({})
    ? createMuiTheme(themes.natura.light)
    : providerTheme,
  [providerTheme]);

  const colorMap = React.useMemo(() =>{
    const { primary, secondary, complementary, error, success, background, text } = theme.palette;
    return {
      primary: {
        container: primary.main,
        text: primary.contrastText
      },
      secondary: {
        container: secondary.main,
        text: secondary.contrastText
      },
      info: {
        container: complementary.link,
        text: background.default
      },
      error: {
        container: error.main,
        text: background.default
      },
      warning: {
        container: complementary.link,
        text: primary.contrastText
      },
      success: {
        container: success.main,
        text: background.default
      },
      light: {
        container: background.paper,
        text: primary.contrastText
      },
      dark: {
        container: text.disabled,
        text: primary.contrastText
      }
    };
  },[theme]);

  const fontMap = React.useMemo(() => {
    const { typography } = theme;
    return {
      fontFamily: typography.fontFamily,
      fontSize: typography.caption.fontSize,
      fontWeight: typography.caption.fontWeight,
      lineHeight: typography.caption.lineHeight
    };
  },[theme]);

  const constraints = React.useMemo(() => {
    const { spacing } = theme;
    return {
      padding: `1px ${spacing()}px`,
      borderRadius: 100
    };
  },[theme]);

  return (
    <Container
      backgroundColor={colorMap[color].container}
      textColor={colorMap[color].text}
      fontFamily={fontMap.fontFamily}
      fontSize={fontMap.fontSize}
      fontWeight={fontMap.fontWeight}
      lineHeigt={fontMap.lineHeight}
      padding={constraints.padding}
      borderRadius={constraints.borderRadius}
      style={style}
      className={classes}
      {...rest}
    >
      {props.children}
    </Container>
  );
};

interface IContainerProps {
  backgroundColor: string;
  textColor: string;
  fontFamily: string;
  fontSize: string | number;
  fontWeight: string | number;
  lineHeigt: number;
  padding: string;
  borderRadius: number;
}

const Container = styled.div<IContainerProps> `
  background-color: ${props => props.backgroundColor};
  color: ${props => props.textColor};
  font-family: ${props => props.fontFamily};
  font-size: ${props => props.fontSize};
  font-weight: ${props => props.fontWeight};
  line-height: ${props => props.lineHeigt}rem;
  padding: ${props => props.padding};
  border-radius: ${props => props.borderRadius}px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default withTheme(Badge);
