import * as React from "react";
import "@naturacosmeticos/natds-icons/dist/natds-icons.css";
import clsx from "clsx";
import { makeIconStyles } from "./makeIconStyles";
import { IIconProps } from "./Icon.props";

export { IIconProps } from "./Icon.props";

/**
 * ## Import
 *
 * ```
 * import { Icon } from '@naturacosmeticos/natds-web';
 * ```
 */
export const Icon = React.forwardRef<unknown, IIconProps>(
  (
    props: IIconProps,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ref: any,
  ) => {

    const {
      className,
      name,
      size,
      ...rest
    } = props;

    const useIconStyles = makeIconStyles({ size }),
      classes = useIconStyles(),

      classNames = [
        "natds-icons",
        `natds-icons-${String(name)}`,
        classes.root,
        className,
      ];

    return <i className={clsx(classNames)} ref={ref} {...rest} />;

  });

Icon.displayName = "Icon";
export default Icon;
