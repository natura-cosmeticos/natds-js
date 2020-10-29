import * as React from "react";
import { IDrawerFooterProps } from "./DrawerFooter.props";
import { DrawerFooterComponent } from "./DrawerFooterComponent";
import useDefaultTheme from "../../hooks/useDefaultTheme";

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
      children, component, ...otherProps
    } = props;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const theme: any = useDefaultTheme();

    return (
      <DrawerFooterComponent
        as={component}
        theme={theme}
        {...otherProps}
        ref={ref}>
        {children}
      </DrawerFooterComponent>
    );
  });

DrawerFooter.displayName = "DrawerFooter";

export default DrawerFooter;
