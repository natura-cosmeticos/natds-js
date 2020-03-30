import React, { FunctionComponent, forwardRef } from 'react';
import { withTheme } from '@material-ui/styles';
import MaterialSelect, {
  SelectProps as ISelectProps,
} from '@material-ui/core/Select';
export { SelectProps as ISelectProps } from '@material-ui/core/Select';

export const Select: FunctionComponent<Omit<
  ISelectProps,
  'translate'
>> = forwardRef((props: Omit<ISelectProps, 'translate'>, ref: any) => (
  <MaterialSelect {...props} ref={ref} />
));

export default withTheme(Select);
