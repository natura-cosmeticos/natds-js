import React, { FunctionComponent, forwardRef } from 'react';
import { withTheme } from '@material-ui/styles';
import MaterialRadio, { RadioProps as IRadioProps } from '@material-ui/core/Radio';
export { RadioProps as IRadioProps } from '@material-ui/core/Radio';

export const Radio: FunctionComponent<Omit<IRadioProps, 'translate'>> = forwardRef((
  props: Omit<IRadioProps, 'translate'>,
  ref: any
) => (
  <MaterialRadio {...props} ref={ref} />
));

export default withTheme(Radio);
