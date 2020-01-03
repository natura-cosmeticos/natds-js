import React, { FunctionComponent } from 'react';
import MaterialCollapse, {
  CollapseProps as ICollapseProps,
} from '@material-ui/core/Collapse';
export { CollapseProps as ICollapseProps } from '@material-ui/core/Collapse';

const Collapse: FunctionComponent<ICollapseProps> = (props: ICollapseProps) => (
  <MaterialCollapse {...props} />
);

export default Collapse;
