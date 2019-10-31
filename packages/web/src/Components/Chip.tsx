import React, { FunctionComponent } from 'react';

import MaterialChip, { ChipProps } from '@material-ui/core/Chip';
import { withTheme } from '@material-ui/styles';

const Chip: FunctionComponent<ChipProps> = (props: ChipProps) => {
  return (
    <MaterialChip {...props} />
  );
};

export default withTheme(Chip);
