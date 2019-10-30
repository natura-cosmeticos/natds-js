import React, { FunctionComponent } from 'react';

import MaterialChip from '@material-ui/core/Chip';
import { withTheme } from '@material-ui/styles';

enum Colors {
  default = 'default',
  primary = 'primary',
  secondary = 'secondary'
}

enum Variants {
  default = 'default',
  outlined = 'outlined'
}

enum Sizes {
  small = 'small',
  medium = 'medium'
}

export interface IProps {
  avatar?: React.ReactElement;
  clickable?: boolean;
  color?: Colors;
  deleteIcon?: React.ReactElement;
  disabled?: boolean;
  icon?: React.ReactElement;
  label?: React.ReactNode;
  onDelete?: React.EventHandler<any>;
  size?: Sizes;
  variant?: Variants;
}

const Chip: FunctionComponent<IProps> = (props: IProps) => {
  return (
    <MaterialChip {...props} />
  );
};

export default withTheme(Chip);
