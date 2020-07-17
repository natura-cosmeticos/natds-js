import React, { FunctionComponent, forwardRef } from 'react';
import MaterialCollapse, {
  CollapseProps as ICollapseProps
} from '@material-ui/core/Collapse';
export { CollapseProps as ICollapseProps } from '@material-ui/core/Collapse';

const Collapse: FunctionComponent<ICollapseProps> = forwardRef((
  props: ICollapseProps,
  ref: any
) => <MaterialCollapse {...props} ref={ref} />);

export default Collapse;
