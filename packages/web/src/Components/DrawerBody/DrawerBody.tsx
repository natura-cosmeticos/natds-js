// eslint-disable-next-line no-use-before-define
import * as React from "react";
import { IDrawerBodyProps } from "./DrawerBody.props";
import { useStyles } from "./DrawerBody.styles";

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
    children,
    component: Component = "div",
    scrollComponent: ScrollComponent = "div",
    ...otherProps
  } = props;
  const [
    scrolled, setScrolled,
  ] = React.useState(false);

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
      const SCROLL_POSITION_ZERO = 0;

      setScrolled(scrollTop > SCROLL_POSITION_ZERO);
    }
  };

  const { root, scroll } = useStyles({ scrolled });

  return (
    <Component
      className={root}
      ref={ref}
      {...otherProps}>
      <ScrollComponent
        className={scroll}
        onScroll={handleScrolled}>
        {children}
      </ScrollComponent>
    </Component>
  );
});

DrawerBody.displayName = "DrawerBody";

export default DrawerBody;
