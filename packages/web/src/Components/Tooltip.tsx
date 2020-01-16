import React, { FunctionComponent } from 'react';
import MaterialTooltip, { TooltipProps as ITooltipProps, } from '@material-ui/core/Tooltip';
import { withTheme } from '@material-ui/core';
export { TooltipProps as ITooltipProps } from '@material-ui/core/Tooltip';

const Tooltip: FunctionComponent<ITooltipProps> = (props: ITooltipProps) => (
  <MaterialTooltip {...props} />
);

export default withTheme(Tooltip);
