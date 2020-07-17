import React, { FunctionComponent, forwardRef } from 'react';
import { withTheme } from '@material-ui/styles';
import MaterialCard, { CardProps as ICardProps } from '@material-ui/core/Card';
export { CardProps as ICardProps } from '@material-ui/core/Card';

export const Card: FunctionComponent<ICardProps> = forwardRef((
  props: ICardProps,
  ref: any
) => <MaterialCard {...props} ref={ref} />);

export default withTheme(Card);
