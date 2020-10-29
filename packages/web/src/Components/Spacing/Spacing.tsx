import * as React from "react";

import clsx from "clsx";
import { Box } from "@material-ui/core";
import { ISpacingProps } from "./Spacing.props";
import { useStyles } from "./Spacing.styles";

export const Spacing : React.FunctionComponent<ISpacingProps> = (
  props: ISpacingProps,
) => {
  const {
    children,
    className,
    component: Component = "div",
    display,
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
    style,
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

  return <Box
    component={Component}
    className={clsx(classes.root, className)}
    display={display}
    {...otherProps}
    style={style}
  >
    {children}
  </Box>;
};

Spacing.displayName = "Spacing";
export default Spacing;
