/* eslint-disable max-lines */
import React, { FunctionComponent, forwardRef } from "react";
import styled from "styled-components";
import { withTheme } from "@material-ui/core/styles";

import { IThemeWeb } from "../Themes";
import { getDefaultTheme } from "./shared";

const defaultValues = {
  lineHeight: 16,
};

type IContextualBadgeColors = "primary" | "secondary" | "info" | "error" | "warning" | "success" | "light" | "dark";

type IContextualBadgeTypes = "standard";

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

// @todo refactor(web): refactor ContextualBadge component
export const ContextualBadge: FunctionComponent<IContextualBadgeProps> = forwardRef((
  props: IContextualBadgeProps,
  ref: any,
) => {
  const {
      children,
      classes,
      color = "primary",
      style,
      theme: providerTheme,
      type = "standard",
      ...rest
    } = props,

    theme: any = React.useMemo(
      () => getDefaultTheme(providerTheme),
      [providerTheme],
    ),

    colorMap = React.useMemo(() => {
      const {
        primary, secondary, complementary, error, success, background, text,
      } = theme.palette;

      return {
        dark: {
          container: text.disabled,
          text: background.defaultContrastText,
        },
        error: {
          container: error.main,
          text: error.contrastText,
        },
        info: {
          container: complementary.link,
          text: complementary.linkContrastText,
        },
        light: {
          container: background.paper,
          text: background.paperContrastText,
        },
        primary: {
          container: primary.main,
          text: primary.contrastText,
        },
        secondary: {
          container: secondary.main,
          text: secondary.contrastText,
        },
        success: {
          container: success.main,
          text: success.contrastText,
        },
        warning: {
          container: complementary.warning,
          text: complementary.warningContrastText,
        },
      };
    }, [theme]),

    fontMap = React.useMemo(() => {
      const { typography } = theme;

      return {
        fontFamily: typography.fontFamily,
        fontSize: typography.caption.fontSize,
        fontWeight: typography.caption.fontWeight,
        lineHeight: defaultValues.lineHeight,
      };
    }, [theme]),

    constraints = React.useMemo(() => {
      const { spacing, shape } = theme;

      return {
        borderRadius: shape.badgeBorderRadius,
        padding: `1px ${spacing()}px`,
      };
    }, [theme]);

  return (
    <Container
      backgroundColor={colorMap[color].container}
      borderRadius={constraints.borderRadius}
      className={classes}
      data-type={type}
      fontFamily={fontMap.fontFamily}
      fontSize={fontMap.fontSize}
      fontWeight={fontMap.fontWeight}
      lineHeight={fontMap.lineHeight}
      padding={constraints.padding}
      ref={ref}
      style={style}
      textColor={colorMap[color].text}
      {...rest}
    >
      {children}
    </Container>
  );
});

/**
 * @todo Separate classes for `ContextualBadge.tsx` file
 */
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

const Container = styled.span<IContainerProps>`
  background-color: ${(props) => props.backgroundColor};
  border-radius: ${(props) => props.borderRadius}px;
  color: ${(props) => props.textColor};
  font-family: ${(props) => props.fontFamily};
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => props.fontWeight};
  line-height: ${(props) => props.lineHeight}px;
  padding: ${(props) => props.padding};
`;

export default withTheme(ContextualBadge);
