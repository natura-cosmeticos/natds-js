import React, { FunctionComponent } from 'react';
import { withTheme } from '@material-ui/styles';
import MaterialCardMedia, {
  CardMediaProps as ICardMediaProps,
} from '@material-ui/core/CardMedia';
export { CardMediaProps as ICardMediaProps } from '@material-ui/core/CardMedia';

const CardMedia: FunctionComponent<Omit<ICardMediaProps, 'translate'>> = (
  props: Omit<ICardMediaProps, 'translate'>
) => <MaterialCardMedia {...props} />;

export default withTheme(CardMedia);
