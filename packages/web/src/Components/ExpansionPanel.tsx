import React, { FunctionComponent, forwardRef } from 'react';
import { withTheme } from '@material-ui/styles';
import MaterialExpansionPanel, {
  ExpansionPanelProps as IExpansionPanelProps 
} from '@material-ui/core/ExpansionPanel';
export { 
  ExpansionPanelProps as IExpansionPanelProps 
} from '@material-ui/core/ExpansionPanel';

export const ExpansionPanel: FunctionComponent<IExpansionPanelProps> = forwardRef((
  props: IExpansionPanelProps,
  ref: any
) => (
  <MaterialExpansionPanel {...props} ref={ref} />
));

export default withTheme(ExpansionPanel);
