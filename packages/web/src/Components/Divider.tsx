import React, { FunctionComponent } from 'react';
import { withTheme } from '@material-ui/styles';
import MaterialDivider, { DividerProps as IDividerProps } from '@material-ui/core/Divider';
export { DividerProps as IDividerProps } from '@material-ui/core/Divider';

export const Divider: FunctionComponent<Omit<IDividerProps, 'translate'>> = (
  props: Omit<IDividerProps, 'translate'>
) => {
  return <MaterialDivider {...props} />;
};

export default withTheme(Divider);
