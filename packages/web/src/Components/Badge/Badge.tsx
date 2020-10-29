import * as React from "react";
import MaterialBadge from "@material-ui/core/Badge";
import { IBadgeProps } from "./Badge.props";

/**
 * For more advanced usages, check [Material UI Badge docs](https://material-ui.com/components/badges/)
 *
 * ## Importing
 *
 * ```
 * import { Badge } from '@naturacosmeticos/natds-web';
 * ```
 */
export const Badge = React.forwardRef<HTMLDivElement, IBadgeProps>((
  props: IBadgeProps, ref,
) => <MaterialBadge {...props} ref={ref} />);

Badge.displayName = "Badge";

export default Badge;
