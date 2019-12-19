import * as React from 'react';
import styled from 'styled-components';
import { withTheme, createMuiTheme } from '@material-ui/core/styles';
import isEqual from 'lodash/isEqual';

import { IThemeWeb, themes } from '../Themes';

const defaultValues = {
  lineHeight: 16
};

type IContextualBadgeColors = 'primary' | 'secondary' | 'info' | 'error' | 'warning' | 'success' | 'light' | 'dark';

type IContextualBadgeTypes = 'standard';

export interface IContextualBadgeProps {
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
   * Color of the ContextualBadge. Defaults to 'primary'
   */
  color?: IContextualBadgeColors;
  /**
   * @optional
   * Type of the ContextualBadge. Defaults to 'standard'
   */
  type?: IContextualBadgeTypes;
  /**
   * Classes to be used on the ContextualBadge
   */
  classes?: string;
  /**
   * Style to be used on the ContextualBadge
   */
  style?: React.CSSProperties;
  /**
   * Elements to be placed inside the ContextualBadge
   */
  children?: React.ReactNode;
}

export const ContextualBadge: React.FunctionComponent<IContextualBadgeProps> = (props: IContextualBadgeProps) => {
  const {
    theme: providerTheme,
    color = 'primary',
    type = 'standard',
    classes,
    style,
    children,
    ...rest
  } = props;

  const theme: any = React.useMemo(() => {
    const parsedProviderTheme = JSON.parse(JSON.stringify(providerTheme));
    const parsedDefaulttheme = JSON.parse(JSON.stringify(createMuiTheme({})));
    return isEqual(parsedProviderTheme, parsedDefaulttheme)
      ? createMuiTheme(themes.natura.light)
      : providerTheme;
  },
    [providerTheme]);

  const colorMap = React.useMemo(() => {
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
        text: complementary.linkContrastText
      },
      error: {
        container: error.main,
        text: error.contrastText
      },
      warning: {
        container: complementary.warning,
        text: complementary.warningContrastText
      },
      success: {
        container: success.main,
        text: success.contrastText
      },
      light: {
        container: background.paper,
        text: background.paperContrastText
      },
      dark: {
        container: text.disabled,
        text: background.defaultContrastText
      }
    };
  }, [theme]);

  const fontMap = React.useMemo(() => {
    const { typography } = theme;
    return {
      fontFamily: typography.fontFamily,
      fontSize: typography.caption.fontSize,
      fontWeight: typography.caption.fontWeight,
      lineHeight: defaultValues.lineHeight
    };
  }, [theme]);

  const constraints = React.useMemo(() => {
    const { spacing, shape } = theme;
    return {
      padding: `1px ${spacing()}px`,
      borderRadius: shape.badgeBorderRadius
    };
  }, [theme]);

  return (
    <Container
      backgroundColor={colorMap[color].container}
      textColor={colorMap[color].text}
      fontFamily={fontMap.fontFamily}
      fontSize={fontMap.fontSize}
      fontWeight={fontMap.fontWeight}
      lineHeight={fontMap.lineHeight}
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
  lineHeight: number;
  padding: string;
  borderRadius: number;
}

const Container = styled.div<IContainerProps> `
  background-color: ${props => props.backgroundColor};
  color: ${props => props.textColor};
  font-family: ${props => props.fontFamily};
  font-size: ${props => props.fontSize};
  font-weight: ${props => props.fontWeight};
  line-height: ${props => props.lineHeight}px;
  padding: ${props => props.padding};
  border-radius: ${props => props.borderRadius}px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default withTheme(ContextualBadge);
