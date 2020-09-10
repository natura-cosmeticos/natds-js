import * as React from "react";
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

    const classes = useStyles();

    const sizeClassNameKey = `${size}FontSize`;

    const classNames = [
      "natds-icons",
      `natds-icons-${String(name)}`,
      classes.root,
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      classes[sizeClassNameKey],
      className,
    ];

    /**
     * @todo Adopt Material UI Icon component since `natds-react` 1.0
     */
    return <i className={clsx(classNames)} ref={ref} {...rest} />;

  });

Icon.displayName = "Icon";
export default Icon;
