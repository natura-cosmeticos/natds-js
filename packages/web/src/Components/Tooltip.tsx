import React, { FunctionComponent, forwardRef } from "react";
import MaterialTooltip, { TooltipProps as ITooltipProps } from "@material-ui/core/Tooltip";
import { withTheme } from "@material-ui/core";

export { TooltipProps as ITooltipProps } from "@material-ui/core/Tooltip";

const Tooltip: FunctionComponent<ITooltipProps> = forwardRef((
  props: ITooltipProps,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ref: any,
) => <MaterialTooltip {...props} ref={ref} />);

Tooltip.displayName = "Tooltip";

export default withTheme(Tooltip);
