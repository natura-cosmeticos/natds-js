import React, { FunctionComponent } from 'react';
import { withTheme } from '@material-ui/styles';
import MaterialCardHeader, {
  CardHeaderProps as ICardHeaderProps,
} from '@material-ui/core/CardHeader';
export { CardHeaderProps as ICardHeaderProps } from '@material-ui/core/CardHeader';

const CardHeader: FunctionComponent<ICardHeaderProps> = (
  props: ICardHeaderProps
) => <MaterialCardHeader {...props} />;

export default withTheme(CardHeader);
