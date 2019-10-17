import React, { FunctionComponent } from 'react';

import MaterialChip from '@material-ui/core/Chip'

export interface IProps {
  avatar?: any;
  classes?: object;
  clickable?: boolean;
  component?: any;
  deleteIcon?: any;
  disabled?: boolean;
  icon?: any;
  label: string;
  onDelete?: void;
};

export const Chip: FunctionComponent<IProps> = (props: IProps) => {
  return (
    <MaterialChip {...props} />
  );
};
