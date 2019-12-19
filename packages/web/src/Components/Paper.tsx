import React, { FunctionComponent } from 'react';
import MaterialPaper, {
  PaperProps as IPaperProps,
} from '@material-ui/core/Paper';
export { PaperProps as IPaperProps } from '@material-ui/core/Paper';

const Paper: FunctionComponent<IPaperProps> = (props: IPaperProps) => (
  <MaterialPaper {...props} />
);

export default Paper;
