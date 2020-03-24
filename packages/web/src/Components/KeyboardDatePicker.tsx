import React, { FunctionComponent, forwardRef } from 'react';
import { withTheme } from '@material-ui/styles';
import Icon from './Icon';
import {
  KeyboardDatePicker as MaterialKeyboardDatePicker,
  KeyboardDatePickerProps as DatePickerViewsProps,
} from '@material-ui/pickers/DatePicker';

export { DatePickerViewsProps as IKeyboardDatePickerViewsProps } from '@material-ui/pickers/DatePicker';

export const KeyboardDatePicker: FunctionComponent<Omit<
  DatePickerViewsProps,
  'keyboardIcon'
>> = forwardRef(
  (props: Omit<DatePickerViewsProps, 'keyboardIcon'>, ref: any) => {
    return (
      <MaterialKeyboardDatePicker
        {...props}
        keyboardIcon={<Icon name="outlined-action-calendar" size="tiny" />}
        ref={ref}
      />
    );
  }
);

export default withTheme(KeyboardDatePicker);
