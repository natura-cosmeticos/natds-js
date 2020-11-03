// eslint-disable-next-line no-use-before-define
import * as React from "react";
import { IDrawerFooterProps } from "./DrawerFooter.props";
import useStyles from "./DrawerFooter.styles";

export { IDrawerFooterProps } from "./DrawerFooter.props";

/**
 * ## Importing
 *
 * ```
 * import { DrawerFooter } from '@naturacosmeticos/natds-web';
 * ```
 */
export const DrawerFooter = React.forwardRef<HTMLElement, IDrawerFooterProps>(
  (props: IDrawerFooterProps, ref) => {
    const {
      children, component: Component = "div", ...otherProps
    } = props;

    const { root } = useStyles();

    return (
      <Component
        {...otherProps}
        className={root}
        ref={ref}>
        {children}
      </Component>
    );
  });

DrawerFooter.displayName = "DrawerFooter";

export default DrawerFooter;
