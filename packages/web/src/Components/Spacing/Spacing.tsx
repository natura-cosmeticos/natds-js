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
    mb,
    ml,
    mr,
    mt,
    mx,
    my,
    // eslint-disable-next-line id-length
    p,
    padding,
    paddingBottom,
    paddingLeft,
    paddingRight,
    paddingTop,
    paddingX,
    paddingY,
    pb,
    pl,
    pr,
    pt,
    px,
    py,
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
    mb,
    ml,
    mr,
    mt,
    mx,
    my,
    // eslint-disable-next-line id-length
    p,
    padding,
    paddingBottom,
    paddingLeft,
    paddingRight,
    paddingTop,
    paddingX,
    paddingY,
    pb,
    pl,
    pr,
    pt,
    px,
    py,
  });

  return <Component className={clsx(classes.root, className)}
    {...otherProps}
    ref={ref}>
    {children}
  </Component>;
});

Spacing.displayName = "Spacing";
export default Spacing;
