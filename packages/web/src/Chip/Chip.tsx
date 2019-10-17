import React, { FunctionComponent } from 'react';

import MaterialChip from '@material-ui/core/Chip'

export interface IProps {
  label: string;
  onDelete: any;
  clickable: boolean;
};

export const Chip: FunctionComponent<IProps> = (props: IProps) => {
  return (
    <MaterialChip {...props} />
  );
};
