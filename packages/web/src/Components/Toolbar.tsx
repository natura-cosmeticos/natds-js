import React, { FunctionComponent, forwardRef } from 'react';
import MaterialToolbar, { ToolbarProps as IToolbarProps } from '@material-ui/core/Toolbar';
import { withTheme} from '@material-ui/core/styles';
export { ToolbarProps as IToolbarProps } from '@material-ui/core/Toolbar';

const Toolbar: FunctionComponent<IToolbarProps> = forwardRef((
  props: IToolbarProps,
  ref: any
) => (
  <MaterialToolbar {...props} ref={ref} />
));

export default withTheme(Toolbar);
