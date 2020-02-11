import React, { FunctionComponent, forwardRef } from 'react';
import MaterialTooltip, { TooltipProps as ITooltipProps, } from '@material-ui/core/Tooltip';
import { withTheme } from '@material-ui/core';
export { TooltipProps as ITooltipProps } from '@material-ui/core/Tooltip';

const Tooltip: FunctionComponent<ITooltipProps> = forwardRef((
  props: ITooltipProps,
  ref: any
) => (
  <MaterialTooltip {...props} ref={ref} />
));

export default withTheme(Tooltip);
