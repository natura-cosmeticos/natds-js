import * as React from "react";
import MaterialIcon from "@material-ui/core/Icon";
import "@naturacosmeticos/natds-icons/dist/natds-icons.css";
import clsx from "clsx";
import { useStyles } from "./Icon.styles";
import { IIconProps } from "./Icon.props";

export { IIconProps } from "./Icon.props";

/**
 * ## Import
 *
 * ```
 * import { Icon } from '@naturacosmeticos/natds-web';
 * ```
 */
export const Icon = React.forwardRef<HTMLElement, IIconProps>(
  (
    props: IIconProps,
    ref,
  ) => {

    const {
      className,
      name = "filled-default-mockup",
      size = "standard",
      ...otherProps
    } = props;

    const classes = useStyles({ name, size });
    // const sizeClassNameKey = `${size}FontSize`;

    const classNames = clsx([
      "natds-icons",
      `natds-icons-${String(name)}`,
      className,
      classes.root,
    ]);

    return <MaterialIcon className={classNames} component={"i"} ref={ref} {...otherProps}>{name}</MaterialIcon>;
  },
);

Icon.displayName = "Icon";
export default Icon;
