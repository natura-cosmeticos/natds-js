import React, { FunctionComponent } from 'react';
import { withTheme } from '@material-ui/styles';
import MaterialExpansionPanelActions, {
  ExpansionPanelActionsProps as IExpansionPanelActionsProps
} from '@material-ui/core/ExpansionPanelActions';
export {
  ExpansionPanelActionsProps as IExpansionPanelActionsProps
} from '@material-ui/core/ExpansionPanelActions';

export const ExpansionPanelActions: FunctionComponent<IExpansionPanelActionsProps> =
(props: IExpansionPanelActionsProps) => (
  <MaterialExpansionPanelActions {...props} />
);

export default withTheme(ExpansionPanelActions);
