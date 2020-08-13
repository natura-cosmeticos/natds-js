/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from "react";
import MaterialTooltip from "@material-ui/core/Tooltip";
import {ITooltipProps} from "./ITooltipProps";

const Tooltip : (props: ITooltipProps, ref: any) => JSX.Element = (props: ITooltipProps, ref: any) => <MaterialTooltip
  {...props}
  ref={ref}
  title={props.title} />;

const DefaultTooltip = React.forwardRef<HTMLElement, ITooltipProps>(Tooltip);

DefaultTooltip.displayName = "DefaultTooltip";

export default DefaultTooltip;
