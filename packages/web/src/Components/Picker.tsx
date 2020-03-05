import React, { FunctionComponent, forwardRef } from 'react';
import { withTheme } from '@material-ui/styles';
import MaterialPicker, {
  KeyboardDatePickerProps as DatePickerViewsProps,
} from '@material-ui/pickers';
export { KeyboardDatePickerProps as DatePickerViewsProps } from '@material-ui/pickers';

const Picker: FunctionComponent<DatePickerViewsProps> = forwardRef(
  (props: DatePickerViewsProps, ref: any) => (
    <MaterialPicker {...props} ref={ref} />
  )
);

export default withTheme(Picker);
