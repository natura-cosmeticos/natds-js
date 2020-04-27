import * as React from 'react';
import {
  KeyboardDatePicker,
  PickersUtilProvider,
} from '@naturacosmeticos/natds-web';
import DateFnsUtils from '@date-io/date-fns';

interface IKeyboardDatePickerViewsProps {
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
  okLabel?: string;
  cancelLabel?: string;
  clearLabel?: string;
}

const KeyboardDatePickerWrapper = ({
  value = new Date(),
  ...props
}: IKeyboardDatePickerViewsProps) => {
  const [selectedDate, setSelectedDate] = React.useState<Date | string | null>(
    value
  );

  return (
    <PickersUtilProvider utils={DateFnsUtils}>
      <KeyboardDatePicker
        label="Label"
        helpText="Assistive text"
        format="dd/MM/yyyy"
        value={selectedDate}
        onChange={setSelectedDate}
        {...props}
      />
    </PickersUtilProvider>
  );
};

export const variants = [
  {
    title: 'Dialog (Mobile)',
    component: <KeyboardDatePickerWrapper variant="dialog" />,
  },
  {
    title: 'Inline (Desktop)',
    component: <KeyboardDatePickerWrapper variant="inline" autoOk />,
  },
];

export const types = [
  {
    title: 'Outlined',
    component: <KeyboardDatePickerWrapper />,
  },
];

export const states = [
  {
    title: 'Empty',
    component: (
      <KeyboardDatePickerWrapper
        value={null}
        placeholder="Pick a date"
        clearable
      />
    ),
  },
  {
    title: 'Filled',
    component: <KeyboardDatePickerWrapper />,
  },
  {
    title: 'Success',
    component: <KeyboardDatePickerWrapper state="success" />,
  },
  {
    title: 'Error',
    component: <KeyboardDatePickerWrapper state="error" />,
  },
];

export const attributes = [
  {
    title: 'Auto OK',
    component: <KeyboardDatePickerWrapper autoOk />,
  },
  {
    title: 'Button Clear',
    component: (
      <KeyboardDatePickerWrapper placeholder="Pick a date" clearable />
    ),
  },
  {
    title: 'Format - MM/yy',
    component: <KeyboardDatePickerWrapper format="MM/yy" />,
  },
  {
    title: 'Help Text - Not used',
    component: <KeyboardDatePickerWrapper helpText="" />,
  },
  {
    title: 'Disabled',
    component: <KeyboardDatePickerWrapper disabled />,
  },
  {
    title: 'Required',
    component: <KeyboardDatePickerWrapper required />,
  },
  {
    title: 'Custom Dialog Buttons Label',
    component: (
      <KeyboardDatePickerWrapper
        okLabel="Ok Label"
        cancelLabel="Cancel Label"
        clearLabel="Clear Label"
        clearable
      />
    ),
  },
  {
    title: 'Disable Toolbar',
    component: <KeyboardDatePickerWrapper variant="static" disableToolbar />,
  },
  {
    title: 'Disable Future',
    component: <KeyboardDatePickerWrapper variant="static" disableFuture />,
  },
  {
    title: 'Disable Past',
    component: <KeyboardDatePickerWrapper variant="static" disablePast />,
  },
  {
    title: 'Open To - Year',
    component: <KeyboardDatePickerWrapper variant="static" openTo="year" />,
  },
  {
    title: 'Views - Month',
    component: <KeyboardDatePickerWrapper variant="static" views={['month']} />,
  },
  {
    title: 'Animate Year Scrolling',
    component: (
      <KeyboardDatePickerWrapper
        variant="static"
        openTo="year"
        views={['year']}
        animateYearScrolling
      />
    ),
  },
];
