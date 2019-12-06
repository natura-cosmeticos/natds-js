import React, { FunctionComponent } from 'react';

import MaterialSwitch, { SwitchProps } from '@material-ui/core/Switch';
import { withTheme } from '@material-ui/styles';

const Switch: FunctionComponent<Omit<SwitchProps, 'translate'>> = (
  props: Omit<SwitchProps, 'translate'>
) => {
  return <MaterialSwitch {...props} />;
};

export default withTheme(Switch);
