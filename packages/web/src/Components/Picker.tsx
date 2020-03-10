import React, { FunctionComponent, forwardRef } from 'react';
import { withTheme } from '@material-ui/styles';
import {
  KeyboardDatePicker,
  KeyboardDatePickerProps as DatePickerViewsProps
} from '@material-ui/pickers/DatePicker';
import { MuiPickersUtilsProvider } from '@material-ui/pickers/MuiPickersUtilsProvider';
import DateFnsUtils from '@date-io/date-fns';
// export { KeyboardDatePickerProps as DatePickerViewsProps } from '@material-ui/pickers/DatePicker';

const Picker: FunctionComponent<DatePickerViewsProps> = forwardRef(
  (props: DatePickerViewsProps, ref: any) => {
    return (
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <KeyboardDatePicker {...props} ref={ref} />
      </MuiPickersUtilsProvider>
    );
  }
);

export default withTheme(Picker);
