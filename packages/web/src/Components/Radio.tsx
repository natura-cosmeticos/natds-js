import React, { FunctionComponent } from 'react';

import MaterialRadio, { RadioProps } from '@material-ui/core/Radio';
import { withTheme } from '@material-ui/styles';

const Radio: FunctionComponent<Omit<RadioProps, 'translate'>> = (
  props: Omit<RadioProps, 'translate'>
) => {
  return <MaterialRadio {...props} />;
};

export default withTheme(Radio);
