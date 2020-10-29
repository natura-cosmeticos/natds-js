import * as React from "react";
import MaterialLink from "@material-ui/core/Link";
import clsx from "clsx";
import { ILinkProps, MaterialLinkColor } from "./Link.props";
import { useStyles } from "./Link.styles";

export { ILinkProps } from "./Link.props";

/**
 * For more advanced usages, check [Material UI Link docs](https://material-ui.com/components/links/)
 *
 * ## Importing
 *
 * ```
 * import { Link } from '@naturacosmeticos/natds-web';
 * ```
 *
 * @see https://material-ui.com/components/links/
 */
export const Link = React.forwardRef<HTMLAnchorElement | HTMLSpanElement, ILinkProps>(
  (props: ILinkProps, ref) => {
    const {
      className,
      children,
      color = "default",
      style,
      ...otherProps
    } = props;

    const { default: stylesForDefault } = useStyles({ children, color });

    const getColorForMaterial = () => {
      if (color === "default") {
        return "inherit" as MaterialLinkColor;
      }

      return color as MaterialLinkColor;
    };

    return (
      <MaterialLink
        className={clsx(stylesForDefault, className)}
        color={getColorForMaterial()}
        style={style}
        ref={ref}
        {...otherProps}
      >
        {children}
      </MaterialLink>
    );
  },
);

Link.displayName = "Link";

export default Link;
