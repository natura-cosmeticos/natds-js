import React, { FunctionComponent } from 'react';
import { withTheme } from '@material-ui/styles';
import MaterialExpansionPanelDetails, {
  ExpansionPanelDetailsProps as IExpansionPanelDetailsProps
} from '@material-ui/core/ExpansionPanelDetails';
export {
  ExpansionPanelDetailsProps as IExpansionPanelDetailsProps 
} from '@material-ui/core/ExpansionPanelDetails';

export const ExpansionPanelDetails: FunctionComponent<IExpansionPanelDetailsProps> = 
(props: IExpansionPanelDetailsProps) => (
  <MaterialExpansionPanelDetails {...props} />
);

export default withTheme(ExpansionPanelDetails);
