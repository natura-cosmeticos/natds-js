import React, { FunctionComponent } from 'react';
import { withTheme } from '@material-ui/styles';
import MaterialRadio, { RadioProps as IRadioProps } from '@material-ui/core/Radio';
export { RadioProps as IRadioProps } from '@material-ui/core/Radio';

const Radio: FunctionComponent<Omit<IRadioProps, 'translate'>> = (
  props: Omit<IRadioProps, 'translate'>
) => {
  return <MaterialRadio {...props} />;
};

export default withTheme(Radio);
