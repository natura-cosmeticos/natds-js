import * as React from "react";
import MaterialCardActions from "@material-ui/core/CardActions";
import { ICardActionsProps } from "./CardActions.props";

/**
 * @deprecated `CardActions` component will be deprecated soon
 *
 * It doesn't make sense for Natura Design System that the library is an exact copy of everything that exists on MaterialUI.
 */
export const CardActions = React.forwardRef(
  (props: ICardActionsProps, ref) => (
    <MaterialCardActions {...props} ref={ref} />
  ),
);

CardActions.displayName = "CardActions";

export default CardActions;
