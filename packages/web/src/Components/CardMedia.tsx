import React, { FunctionComponent, forwardRef } from 'react';
import { withTheme } from '@material-ui/styles';
import MaterialCardMedia, {
  CardMediaProps as ICardMediaProps,
} from '@material-ui/core/CardMedia';
export { CardMediaProps as ICardMediaProps } from '@material-ui/core/CardMedia';

const CardMedia: FunctionComponent<Omit<ICardMediaProps, 'translate'>> = forwardRef((
  props: Omit<ICardMediaProps, 'translate'>,
  ref: any
) => (
  <MaterialCardMedia {...props} ref={ref} />
));

export default withTheme(CardMedia);
