import React, { FunctionComponent, forwardRef } from "react";
import { withTheme } from "@material-ui/styles";
import MaterialBadge, { BadgeProps as IBadgeProps } from "@material-ui/core/Badge";

export { BadgeProps as IBadgeProps } from "@material-ui/core/Badge";

export const Badge: FunctionComponent<IBadgeProps> = forwardRef((
  props: IBadgeProps,
  ref: any,
) => <MaterialBadge {...props} ref={ref} />);

export default withTheme(Badge);
