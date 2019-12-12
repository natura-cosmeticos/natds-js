import React, { FunctionComponent } from 'react';
import { withTheme } from '@material-ui/styles';
import MaterialCardActions, {
  CardActionsProps as ICardActionsProps,
} from '@material-ui/core/CardActions';
export { CardActionsProps as ICardActionsProps } from '@material-ui/core/CardActions';

const CardActions: FunctionComponent<ICardActionsProps> = (
  props: ICardActionsProps
) => <MaterialCardActions {...props} />;

export default withTheme(CardActions);
