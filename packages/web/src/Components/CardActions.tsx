import React, { FunctionComponent, forwardRef } from "react";
import { withTheme } from "@material-ui/styles";
import MaterialCardActions, {
  CardActionsProps as ICardActionsProps,
} from "@material-ui/core/CardActions";

export { CardActionsProps as ICardActionsProps } from "@material-ui/core/CardActions";

const CardActions: FunctionComponent<ICardActionsProps> = forwardRef((
  props: ICardActionsProps,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ref: any,
) => <MaterialCardActions {...props} ref={ref} />);

CardActions.displayName = "CardActions";

export default withTheme(CardActions);
