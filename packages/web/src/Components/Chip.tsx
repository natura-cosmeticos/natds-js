import React, { FunctionComponent } from 'react';
import { withTheme } from '@material-ui/styles';
import MaterialChip, { ChipProps as IChipProps } from '@material-ui/core/Chip';
export { ChipProps as IChipProps } from '@material-ui/core/Chip';

export const Chip: FunctionComponent<IChipProps> = (props: IChipProps) => {
  return <MaterialChip {...props} />;
};

export default withTheme(Chip);
