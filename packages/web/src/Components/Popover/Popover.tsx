// eslint-disable-next-line no-use-before-define
import * as React from "react";
import { Popper } from "@material-ui/core";
import Paper from "../Paper";
import Typography from "../Typography";
import { IPopoverProps } from "./Popover.props";
import { ActionLink } from "./ActionLink";
import { useStyles } from "./Popover.styles";

/**
 * ## Importing
 *
 * ```
 * import { Popover } from "@naturacosmeticos/natds-web";
 * ```
 *
 */
export const Popover = React.forwardRef<unknown, IPopoverProps>((props: IPopoverProps, ref) => {
  const {
    actionLink,
    children,
    component: Component = Popper,
    direction = "bottom",
    maxWidth,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    modifiers,
    open,
    ...rest
  } = props;
  const [
    arrowRef, setArrowRef,
  ] = React.useState<HTMLSpanElement | null>(null);

  const {
    actionLinkContainer, arrow, container, root,
  } = useStyles({
    children, direction, maxWidth, open,
  });

  return (
    <Component
      className={root}
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
      open={open}
      placement={direction}
      ref={ref}
      {...rest}
    >
      <span aria-hidden={true} className={arrow} ref={setArrowRef} />
      <Paper elevation={12} variant="elevation" className={container}>
        <Typography variant="body2">{children}</Typography>
        {actionLink && <ActionLink {...actionLink} className={actionLinkContainer} />}
      </Paper>
    </Component>
  );
});

Popover.displayName = "Popover";

export default Popover;
