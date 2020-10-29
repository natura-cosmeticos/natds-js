import * as React from "react";
import MaterialCardActions from "@material-ui/core/CardActions";
import { ICardActionsProps } from "./CardActions.props";

/**
 * ## Importing
 *
 * ```
 * import { CardActions } from "@naturacosmeticos/natds-web";
 * ```
 */
export const CardActions = React.forwardRef(
  (props: ICardActionsProps, ref) => (
    <MaterialCardActions {...props} ref={ref} />
  ),
);

CardActions.displayName = "CardActions";

export default CardActions;
