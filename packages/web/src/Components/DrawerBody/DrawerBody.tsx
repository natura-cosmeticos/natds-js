import * as React from "react";
import { IDrawerBodyProps } from "./DrawerBody.props";
import { DrawerBodyComponent } from "./DrawerBodyComponent";
import { DrawerBodyScrollComponent } from "./DrawerBodyScrollComponent";
import useDefaultTheme from "../../hooks/useDefaultTheme";

export { IDrawerBodyProps } from "./DrawerBody.props";

/**
 * ## Importing
 *
 * ```
 * import { DrawerBody } from '@naturacosmeticos/natds-web';
 * ```
 */
export const DrawerBody = React.forwardRef<HTMLElement, IDrawerBodyProps>((
  props: IDrawerBodyProps, ref,
) => {
  const {
    children, component, ...otherProps
  } = props;
  const [
    scrolled, setScrolled,
  ] = React.useState(false);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const theme: any = useDefaultTheme();
  const SCROLL_POSITION_ZERO = 0;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleScrolled = (event: any) => {
    if (typeof event === "undefined") {
      return;
    }
    const { target } = event;

    if (typeof target === "undefined") {
      return;
    }
    const { scrollTop } = target;

    if (typeof scrollTop !== "undefined") {
      setScrolled(scrollTop > SCROLL_POSITION_ZERO);
    }
  };

  return (
    <DrawerBodyComponent
      scrolled={scrolled}
      as={component}
      theme={theme}
      ref={ref}
      {...otherProps}>
      <DrawerBodyScrollComponent
        onScroll={handleScrolled}
        theme={theme}>
        {children}
      </DrawerBodyScrollComponent>
    </DrawerBodyComponent>
  );
});

DrawerBody.displayName = "DrawerBody";

export default DrawerBody;
