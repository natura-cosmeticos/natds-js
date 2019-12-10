import React, { FunctionComponent } from 'react';
import { withTheme } from '@material-ui/styles';
import MaterialSwitch, { SwitchProps as ISwitchProps } from '@material-ui/core/Switch';
export { SwitchProps as ISwitchProps } from '@material-ui/core/Switch';

const Switch: FunctionComponent<Omit<ISwitchProps, 'translate'>> = (
  props: Omit<ISwitchProps, 'translate'>
) => {
  return <MaterialSwitch {...props} />;
};

export default withTheme(Switch);
