import React, { FunctionComponent } from 'react';
import { withTheme } from '@material-ui/styles';
import MaterialCardContent, {
  CardContentProps as ICardContentProps,
} from '@material-ui/core/CardContent';
export { CardContentProps as ICardContentProps } from '@material-ui/core/CardContent';

const CardContent: FunctionComponent<ICardContentProps> = (
  props: ICardContentProps
) => <MaterialCardContent {...props} />;

export default withTheme(CardContent);
