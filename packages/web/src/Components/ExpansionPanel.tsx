import React, { FunctionComponent } from 'react';
import { withTheme } from '@material-ui/styles';
import MaterialExpansionPanel, {
  ExpansionPanelProps as IExpansionPanelProps 
} from '@material-ui/core/ExpansionPanel';
export { 
  ExpansionPanelProps as IExpansionPanelProps 
} from '@material-ui/core/ExpansionPanel';

export const ExpansionPanel: FunctionComponent<IExpansionPanelProps> = 
(props: IExpansionPanelProps) => (
  <MaterialExpansionPanel {...props} />
);

export default withTheme(ExpansionPanel);
