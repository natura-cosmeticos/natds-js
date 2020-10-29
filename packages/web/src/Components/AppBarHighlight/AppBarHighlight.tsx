import * as React from "react";
import clsx from "clsx";
import { AppBarHighlightProps } from "./AppBarHighlight.props";
import useStyles from "./AppBarHighlight.styles";

export { AppBarHighlightProps } from "./AppBarHighlight.props";

export const AppBarHighlight : React.FunctionComponent<AppBarHighlightProps> = (props: AppBarHighlightProps) => {

  const {
    className, component: Component = "div", children, ...otherProps
  } = props;

  const { root } = useStyles();

  const classNames: string = clsx(
    "NatDSAppBarHighlight",
    root,
    className,
  );

  return (
    <Component className={classNames} {...otherProps}>
      {children}
    </Component>
  );
};

export default AppBarHighlight;
