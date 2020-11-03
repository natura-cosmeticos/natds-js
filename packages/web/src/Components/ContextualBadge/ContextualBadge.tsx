// eslint-disable-next-line no-use-before-define
import * as React from "react";
import clsx from "clsx";
import { IContextualBadgeProps } from "./ContextualBadge.props";
import useStyles from "./ContextualBadge.styles";

export { IContextualBadgeProps } from "./ContextualBadge.props";

/**
 * ## Importing
 *
 * ```
 * import { ContextualBadge } from '@naturacosmeticos/natds-web';
 * ```
 *
 * @todo rename component to Tag
 */
export const ContextualBadge = React.forwardRef<HTMLDivElement, IContextualBadgeProps>(
  (props: IContextualBadgeProps, ref) => {
    const {
      children,
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      classes: legacyClasses,
      className,
      component: Component = "span",
      color = "primary",
      style,
      type = "standard",
      ...otherProps
    } = props;

    const classes = useStyles();

    return (
      <Component
        className={clsx(classes.root, classes[color], legacyClasses, className)}
        data-type={type}
        ref={ref}
        style={style}
        {...otherProps}
      >
        {children}
      </Component>
    );
  });

ContextualBadge.displayName = "ContextualBadge";

export default ContextualBadge;
