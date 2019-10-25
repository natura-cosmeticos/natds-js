import React, { FunctionComponent } from 'react';

import MaterialChip from '@material-ui/core/Chip';
import { withTheme } from '@material-ui/styles';

export interface IProps {
  avatar?: any;
  classes?: object;
  clickable?: boolean;
  component?: any;
  deleteIcon?: any;
  disabled?: boolean;
  icon?: any;
  label: string;
  onDelete?: () => void;
}

const Chip: FunctionComponent<IProps> = (props: IProps) => {
  return (
    <MaterialChip {...props} />
  );
};

export default withTheme(Chip);
