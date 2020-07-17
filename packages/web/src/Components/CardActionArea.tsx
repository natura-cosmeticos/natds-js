import React, { FunctionComponent, forwardRef } from 'react';
import { withTheme } from '@material-ui/styles';
import MaterialCardActionArea, {
  CardActionAreaProps as ICardActionAreaProps
} from '@material-ui/core/CardActionArea';
export { CardActionAreaProps as ICardActionAreaProps } from '@material-ui/core/CardActionArea';

const CardActionArea: FunctionComponent<ICardActionAreaProps> = forwardRef((
  props: ICardActionAreaProps,
  ref: any
) => <MaterialCardActionArea {...props} ref={ref} />);

export default withTheme(CardActionArea);
