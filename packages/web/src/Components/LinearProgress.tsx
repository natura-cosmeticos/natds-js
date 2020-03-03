import React, { FunctionComponent, forwardRef } from 'react';
import { withTheme } from '@material-ui/styles';
import MaterialLinearProgress, {LinearProgressProps as ILinearProgressProps} from '@material-ui/core/LinearProgress';
export { LinearProgressProps as ILinearProgressProps } from '@material-ui/core/LinearProgress';

export const LinearProgress: FunctionComponent<Omit<ILinearProgressProps, 'translate'>> = forwardRef((
  props: Omit<ILinearProgressProps, 'translate'>,
  ref: any
) => (
  <MaterialLinearProgress {...props} ref={ref} />
));

export default withTheme(LinearProgress);
