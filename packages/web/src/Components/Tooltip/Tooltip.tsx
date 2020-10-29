import * as React from "react";
import MaterialTooltip from "@material-ui/core/Tooltip";
import { ITooltipProps } from "./Tooltip.props";

export { ITooltipProps } from "./Tooltip.props";

export const Tooltip = React.forwardRef<HTMLElement, ITooltipProps>(
  (props: ITooltipProps, ref) => {
    const { children, title, ...otherProps } = props;

    return (
      <MaterialTooltip ref={ref || null} title={title} {...otherProps}>
        {children}
      </MaterialTooltip>
    );
  },
);

Tooltip.displayName = "Tooltip";

export default Tooltip;
