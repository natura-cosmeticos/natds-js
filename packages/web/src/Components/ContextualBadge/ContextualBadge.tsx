import * as React from "react";
import useDefaultTheme from "../../hooks/useDefaultTheme";
import { IContextualBadgeProps } from "./ContextualBadge.props";
import { ContextualBadgeContainer } from "./ContextualBadgeContainer";

export { IContextualBadgeProps } from "./ContextualBadge.props";

/**
 * ## Importing
 *
 * ```
 * import { ContextualBadge } from '@naturacosmeticos/natds-web';
 * ```
 *
 * @todo refactor(web): refactor ContextualBadge component and rename component to Tag
 */
export const ContextualBadge = React.forwardRef<HTMLDivElement, IContextualBadgeProps>(
  (props: IContextualBadgeProps, ref) => {
    const {
      children,
      classes,
      color = "primary",
      style,
      type = "standard",
      ...rest
    } = props;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const theme : any = useDefaultTheme();

    const colorMap = React.useMemo(() => {
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

        const defaultValues = {

          /**
           * @todo adopt lineHeight from `natds-themes`
           */
          lineHeight: 16,
        };

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
      <ContextualBadgeContainer
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
      </ContextualBadgeContainer>
    );
  });

ContextualBadge.displayName = "ContextualBadge";

export default ContextualBadge;
