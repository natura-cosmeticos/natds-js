import React, { FunctionComponent } from 'react';
import { withTheme } from '@material-ui/styles';
import MaterialBadge, { BadgeProps as IBadgeProps } from '@material-ui/core/Badge';
export { BadgeProps as IBadgeProps } from '@material-ui/core/Badge';

export const Badge: FunctionComponent<IBadgeProps> = (props: IBadgeProps) => {
  return (
    <MaterialBadge {...props} />
  );
};

export default withTheme(Badge);
