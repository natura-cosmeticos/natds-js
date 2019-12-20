import React, { FunctionComponent } from 'react';
import { withTheme } from '@material-ui/styles';
import MaterialCard, { CardProps as ICardProps } from '@material-ui/core/Card';
export { CardProps as ICardProps } from '@material-ui/core/Card';

const Card: FunctionComponent<ICardProps> = (props: ICardProps) => (
  <MaterialCard {...props} />
);

export default withTheme(Card);
