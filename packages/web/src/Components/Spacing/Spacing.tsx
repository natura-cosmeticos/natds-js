import * as React from "react";

import clsx from "clsx";
import { ISpacingProps } from "./Spacing.props";
import { useStyles } from "./Spacing.styles";

export const Spacing = React.forwardRef<unknown, ISpacingProps>((
  props: ISpacingProps,
  ref: unknown,
) => {
  const {
    children,
    className,
    component: Component = "div",
    // eslint-disable-next-line id-length
    m,
    margin,
    marginBottom,
    marginLeft,
    marginRight,
    marginTop,
    marginX,
    marginY,
    padding,
    paddingBottom,
    paddingLeft,
    paddingRight,
    paddingTop,
    paddingX,
    paddingY,
    ...otherProps
  } = props;

  const classes = useStyles({
    // eslint-disable-next-line id-length
    m,
    margin,
    marginBottom,
    marginLeft,
    marginRight,
    marginTop,
    marginX,
    marginY,
    padding,
    paddingBottom,
    paddingLeft,
    paddingRight,
    paddingTop,
    paddingX,
    paddingY,
  });

  return <Component className={clsx(classes.root, className)}
    {...otherProps}
    ref={ref}>
    {children}
  </Component>;
});

Spacing.displayName = "Spacing";
export default Spacing;
