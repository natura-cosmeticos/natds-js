import * as React from 'react';
import MaterialTabContainer, {
  TabsProps as ITabContainerProps,
} from '@material-ui/core/Tabs';
import { withTheme } from '@material-ui/core/styles';
export { TabsProps as ITabContainerProps } from '@material-ui/core/Tabs';

export const TabContainer: React.FC<ITabContainerProps> = (
  props: ITabContainerProps
) => {
  return <MaterialTabContainer {...props} />;
};

export default withTheme(TabContainer);
