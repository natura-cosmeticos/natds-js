import * as React from 'react';
import MaterialToolbar, { ToolbarProps as IToolbarProps } from '@material-ui/core/Toolbar';
import { withTheme} from '@material-ui/core/styles';
export { ToolbarProps as IToolbarProps } from '@material-ui/core/Toolbar';

const Toolbar: React.FC<IToolbarProps> = (props: IToolbarProps) => {
  return <MaterialToolbar {...props} />;
};

export default withTheme(Toolbar);
