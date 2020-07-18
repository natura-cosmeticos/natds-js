import React, { FunctionComponent, forwardRef } from "react";
import { withTheme } from "@material-ui/styles";
import MaterialCardActions, {
  CardActionsProps as ICardActionsProps
} from "@material-ui/core/CardActions";
export { CardActionsProps as ICardActionsProps } from "@material-ui/core/CardActions";

const CardActions: FunctionComponent<ICardActionsProps> = forwardRef((
  props: ICardActionsProps,
  ref: any
) => <MaterialCardActions {...props} ref={ref} />);

export default withTheme(CardActions);
