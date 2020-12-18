// eslint-disable-next-line no-use-before-define
import * as React from "react";
import clsx from "clsx";
import { ITagProps } from "./Tag.props";
import useStyles from "./Tag.styles";

export { ITagProps } from "./Tag.props";

export const Tag = React.forwardRef<HTMLDivElement, ITagProps>(
  (props: ITagProps, ref) => {
    const {
      children,
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      classes: legacyClasses,
      className,
      component: Component = "span",
      color = "primary",
      position = "default",
      size = "small",
      style,
      ...otherProps
    } = props;

    const classes = useStyles();
    
    const classNames = clsx(
      className,
      classes.root,
      classes[color],
      classes[position],
      classes[size],
    );

    return (
      <Component
        className={clsx(classNames, legacyClasses)}
        ref={ref}
        style={style}
        {...otherProps}
      >
        {children}
      </Component>
    );
  });

Tag.displayName = "Tag";


/**
     * @deprecated `Contextual Badge` is deprecated since 1.1.0.
     * Use Tag instead.
*/
export const ContextualBadge = Tag;
ContextualBadge.displayName = "Contextual Badge"

export default { ContextualBadge, Tag };