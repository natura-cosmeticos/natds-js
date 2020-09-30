import React, { forwardRef } from "react";
import MaterialLink, { LinkProps } from "@material-ui/core/Link";
import { withTheme } from "@material-ui/core";
import { IThemeWeb } from "../Themes";
import { getDefaultTheme } from "../hooks/useDefaultTheme";

type LinkColor =
  | "default"
  | "initial"
  | "inherit"
  | "primary"
  | "secondary"
  | "textPrimary"
  | "textSecondary"
  | "error";

export interface ILinkProps extends Omit<LinkProps, "color"> {

  /**
   * @optional
   * @default 'default'
   * Color of the Link.
   */
  color?: LinkColor;

  /**
   * @optional
   */
  theme?: IThemeWeb | unknown;
}

const Link: React.ForwardRefExoticComponent<React.PropsWithoutRef<ILinkProps> & React.RefAttributes<unknown>> = forwardRef((
  props: ILinkProps,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ref: any,
) => {
  const {
    color = "default",
    theme: providerTheme,
    style,
  } = props;

  const defaultColor = color === "default";
  const validColor = defaultColor ? "inherit" : color;

  const theme = React.useMemo(() => getDefaultTheme(providerTheme), [providerTheme]);

  /**
   * @todo refactor and extract colorMap and colorStyle
   */
  const colorMap = React.useMemo(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const { palette } = theme as any;

    return {
      default: {
        color: palette.complementary.link,
      },
    };
  }, [theme]);

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const colorStyle = defaultColor ? colorMap[color] : {};

  return (
    <MaterialLink
      {...props}
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      color={validColor as any}
      style={{
        ...colorStyle,
        ...style,
      }}
      ref={ref}
    />
  );
});

export default withTheme(Link);
