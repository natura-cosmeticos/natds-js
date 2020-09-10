import * as React from "react";

import makeStyles from "@material-ui/core/styles/makeStyles";
import { createStyles } from "@material-ui/core";
import clsx from "clsx";
import { ISpacingProps } from "./Spacing.props";
import { IThemeWeb } from "../../Themes";

/**
 * @todo refactor to decrease complexity
 */
// eslint-disable-next-line complexity
export const Spacing = React.forwardRef<unknown, ISpacingProps>((
  props: ISpacingProps,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ref: any,
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
    ...other
  } = props;

  const keys = {
    marginBottom: marginBottom || mb || marginY || my || margin || m,
    marginLeft: marginLeft || ml || marginX || mx || margin || m,
    marginRight: marginRight || mr || marginX || mx || margin || m,
    marginTop: marginTop || mt || marginY || my || margin || m,
    paddingBottom: paddingBottom || pb || paddingY || py || padding || p,
    paddingLeft: paddingLeft || pl || paddingX || px || padding || p,
    paddingRight: paddingRight || pr || paddingX || px || padding || p,
    paddingTop: paddingTop || pt || paddingY || py || padding || p,
  };

  // eslint-disable-next-line complexity
  const styles = (theme: IThemeWeb) => {

    if (typeof theme.sizes === "undefined") {
      return {
        root: {},
      };
    }

    return {
      root: {
        marginBottom: keys.marginBottom ? theme.sizes[keys.marginBottom] : null,
        marginLeft: keys.marginLeft ? theme.sizes[keys.marginLeft] : null,
        marginRight: keys.marginRight ? theme.sizes[keys.marginRight] : null,
        marginTop: keys.marginTop ? theme.sizes[keys.marginTop] : null,
        paddingBottom: keys.paddingBottom ? theme.sizes[keys.paddingBottom] : null,
        paddingLeft: keys.paddingLeft ? theme.sizes[keys.paddingLeft] : null,
        paddingRight: keys.paddingRight ? theme.sizes[keys.paddingRight] : null,
        paddingTop: keys.paddingTop ? theme.sizes[keys.paddingTop] : null,
      },
    };
  };

  const useStyles = makeStyles(createStyles(styles), { name: "NatDSSpacing" });

  const classes = useStyles();

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  return <Component className={clsx(classes.root, className)}
    {...other}
    ref={ref}>
    {children}
  </Component>;
});

Spacing.displayName = "Spacing";
export default Spacing;
