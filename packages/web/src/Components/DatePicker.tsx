import React, { FunctionComponent, forwardRef } from 'react';
import { withTheme } from '@material-ui/styles';
import {
  DatePicker as MaterialDatePicker,
  DatePickerProps as DatePickerViewsProps,
} from '@material-ui/pickers/DatePicker';

const DatePicker: FunctionComponent<DatePickerViewsProps> = forwardRef(
  (props: DatePickerViewsProps, ref: any) => {
    return <MaterialDatePicker {...props} ref={ref} />;
  }
);

export default withTheme(DatePicker);
