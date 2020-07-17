import React, { FunctionComponent, forwardRef } from 'react';
import { withTheme } from '@material-ui/styles';
import MaterialSwitch, { SwitchProps as ISwitchProps } from '@material-ui/core/Switch';
export { SwitchProps as ISwitchProps } from '@material-ui/core/Switch';

export const Switch: FunctionComponent<Omit<ISwitchProps, 'translate'>> = forwardRef((
  props: Omit<ISwitchProps, 'translate'>,
  ref: any
) => <MaterialSwitch {...props} ref={ref} />);

export default withTheme(Switch);
