import * as React from 'react';
import MaterialTabItem, {
  TabProps as ITabItemProps,
} from '@material-ui/core/Tab';
import { withTheme } from '@material-ui/core/styles';
export { TabProps as ITabItemProps } from '@material-ui/core/Tab';

export const TabItem: React.FC<ITabItemProps> = (props: ITabItemProps) => {
  return <MaterialTabItem {...props} />;
};

export default withTheme(TabItem);
