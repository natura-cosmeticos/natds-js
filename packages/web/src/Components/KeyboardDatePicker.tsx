import React, { FunctionComponent, forwardRef } from 'react';
import { withTheme } from '@material-ui/styles';
import {
  KeyboardDatePicker as MaterialKeyboardDatePicker,
  KeyboardDatePickerProps as DatePickerViewsProps,
} from '@material-ui/pickers/DatePicker';

export { DatePickerViewsProps as IKeyboardDatePickerViewsProps } from '@material-ui/pickers/DatePicker';

export const KeyboardDatePicker: FunctionComponent<DatePickerViewsProps> = forwardRef(
  (props: DatePickerViewsProps, ref: any) => {
    return <MaterialKeyboardDatePicker {...props} ref={ref} />;
  }
);

export default withTheme(KeyboardDatePicker);
