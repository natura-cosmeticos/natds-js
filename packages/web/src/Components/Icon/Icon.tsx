import * as React from "react";
import MaterialIcon from "@material-ui/core/Icon";
import iconNames from "@naturacosmeticos/natds-icons/dist/natds-icons.json";
import clsx from "clsx";
import { useStyles } from "./Icon.styles";
import { IIconProps } from "./Icon.props";

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

    const classNames = clsx([
      className,
      classes.root,
      name,
    ]);

    return (
      <MaterialIcon
        className={classNames}
        component={"i"}
        ref={ref} {...otherProps}
      >
        {unescape(iconNames[name])}
      </MaterialIcon>
    );
  },
);

Icon.displayName = "Icon";
export default Icon;
