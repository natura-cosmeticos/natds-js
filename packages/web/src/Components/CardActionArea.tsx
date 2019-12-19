import React, { FunctionComponent } from 'react';
import { withTheme } from '@material-ui/styles';
import MaterialCardActionArea, {
  CardActionAreaProps as ICardActionAreaProps,
} from '@material-ui/core/CardActionArea';
export { CardActionAreaProps as ICardActionAreaProps } from '@material-ui/core/CardActionArea';

const CardActionArea: FunctionComponent<ICardActionAreaProps> = (
  props: ICardActionAreaProps
) => <MaterialCardActionArea {...props} />;

export default withTheme(CardActionArea);
