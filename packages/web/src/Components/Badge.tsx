import React, { FunctionComponent, forwardRef } from "react";
import { withTheme } from "@material-ui/styles";
import MaterialBadge, { BadgeProps as IBadgeProps } from "@material-ui/core/Badge";

export { BadgeProps as IBadgeProps } from "@material-ui/core/Badge";

export const Badge: FunctionComponent<IBadgeProps> = forwardRef((
  props: IBadgeProps,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ref: any,
) => <MaterialBadge {...props} ref={ref} />);

Badge.displayName = "Badge";

export default withTheme(Badge);
