import * as React from 'react';
import {
  DatePicker,
  TextField,
  PickersUtilProvider,
} from '@naturacosmeticos/natds-web';
import DateFnsUtils from '@date-io/date-fns';

interface IDatePickerViewsProps {
  variant?: string;
  openTo?: string;
  format?: string;
  disableToolbar?: boolean;
  disableFuture?: boolean;
  disablePast?: boolean;
  animateYearScrolling?: boolean;
  autoOk?: boolean;
  disabled?: boolean;
  required?: boolean;
  clearable?: boolean;
  views?: ['year' | 'date' | 'month'];
  value?: Date | string | null;
  state?: 'error' | 'success';
  placeholder?: string;
  helpText?: string;
}

const DatePickerWrapper = ({ value = '', ...props }: IDatePickerViewsProps) => {
  const [date, setDate] = React.useState(value);

  const textField = (textFieldProps: any) => (
    <TextField {...textFieldProps} id="random-prop-id" type="text" />
  );

  return (
    <PickersUtilProvider utils={DateFnsUtils}>
      <DatePicker
        label="Label"
        helpText="Assistive text"
        format="dd/MM/yyyy"
        TextFieldComponent={textField}
        value={date}
        onChange={setDate}
        {...props}
      />
    </PickersUtilProvider>
  );
};

export const variants = [
  {
    title: 'Dialog: Use for mobile web interfaces.',
    component: <DatePickerWrapper variant="dialog" />,
  },
  {
    title: 'Inline: Use for desktop web interfaces.',
    component: <DatePickerWrapper variant="inline" autoOk />,
  },
];

export const types = [
  {
    title: 'Outlined',
    component: <DatePickerWrapper />,
  },
];

export const states = [
  {
    title: 'Empty',
    component: (
      <DatePickerWrapper value={null} placeholder="Pick a date" clearable />
    ),
  },
  {
    title: 'Filled',
    component: <DatePickerWrapper />,
  },
  {
    title: 'Success',
    component: <DatePickerWrapper state="success" />,
  },
  {
    title: 'Error',
    component: <DatePickerWrapper state="error" />,
  },
];

export const attributes = [
  {
    title: 'Auto OK',
    component: <DatePickerWrapper autoOk />,
  },
  {
    title: 'Button Clear',
    component: <DatePickerWrapper placeholder="Pick a date" clearable />,
  },
  {
    title: 'Format - MM/yy',
    component: <DatePickerWrapper format="MM/yy" />,
  },
  {
    title: 'Help Text - Not used',
    component: <DatePickerWrapper helpText="" />,
  },
  {
    title: 'Disabled',
    component: <DatePickerWrapper disabled />,
  },
  {
    title: 'Required',
    component: <DatePickerWrapper required />,
  },
  {
    title: 'Disable Toolbar',
    component: <DatePickerWrapper variant="static" disableToolbar />,
  },
  {
    title: 'Disable Future',
    component: <DatePickerWrapper variant="static" disableFuture />,
  },
  {
    title: 'Disable Past',
    component: <DatePickerWrapper variant="static" disablePast />,
  },
  {
    title: 'Open To - Year',
    component: <DatePickerWrapper variant="static" openTo="year" />,
  },
  {
    title: 'Views - Month',
    component: <DatePickerWrapper variant="static" views={['month']} />,
  },
];
