import * as React from "react";
import Paper from "../Paper";
import Typography from "../Typography";
import useDefaultTheme from "../../hooks/useDefaultTheme";
import { IPopoverProps } from "./Popover.props";
import { StyledPopper } from "./StyledPopper";
import { getActionLink } from "./getActionLink";

/**
 * ## Importing
 *
 * ```
 * import { Popover } from "@naturacosmeticos/natds-web";
 * ```
 *
 * @todo Refactor Popover component to remove `styled-components` dependency
 */
export const Popover = React.forwardRef<unknown, IPopoverProps>((props: IPopoverProps, ref) => {
  const {
    actionLink,
    children,
    component,
    direction = "bottom",
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    modifiers,
    ...rest
  } = props;
  const theme = useDefaultTheme();
  const [
    arrowRef, setArrowRef,
  ] = React.useState<HTMLSpanElement | null>(null);

  return (
    <StyledPopper
      as={component}
      theme={theme}
      ref={ref}
      modifiers={{
        arrow: {
          element: arrowRef,
          enabled: true,
        },
        flip: {
          enabled: true,
        },
        preventOverflow: {
          boundariesElement: "scrollParent",
          enabled: true,
        },
      }}
      placement={direction}
      {...rest}
    >
      <span className="arrow" ref={setArrowRef} />
      <Paper elevation={12} variant="elevation" className="popover-container">
        <Typography variant="body2">{children}</Typography>
        {getActionLink(actionLink)}
      </Paper>
    </StyledPopper>
  );
});

Popover.displayName = "Popover";

export default Popover;
