import * as React from 'react';
import {
  KeyboardDatePicker,
  PickersUtilProvider,
} from '@naturacosmeticos/natds-web';
import DateFnsUtils from '@date-io/date-fns';
import { makeStyles } from '@material-ui/core/styles';

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
  clearable?: boolean;
  views?: ['year' | 'date' | 'month'];
}

const KeyboardDatePickerWrapper = (props: IKeyboardDatePickerViewsProps) => {
  const {
    variant,
    disableToolbar,
    format,
    openTo,
    disableFuture,
    disablePast,
    clearable,
    autoOk,
    views,
  } = props;

  const [selectedDate, setSelectedDate] = React.useState<Date | null>(
    new Date()
  );

  const useStyles = makeStyles(theme => ({
    wrapper: {
      display: 'flex',
    },
  }));

  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <PickersUtilProvider utils={DateFnsUtils}>
        <KeyboardDatePicker
          value={selectedDate}
          onChange={setSelectedDate}
          variant={variant}
          disableToolbar={disableToolbar}
          format={format}
          openTo={openTo}
          disableFuture={disableFuture}
          disablePast={disablePast}
          clearable={clearable}
          autoOk={autoOk}
          views={views}
        />
      </PickersUtilProvider>
    </div>
  );
};

export const variants = [
  {
    title: 'Date Format',
    component: (
      <KeyboardDatePickerWrapper variant="dialog" format="dd/MM/yyyy" />
    ),
  },
  {
    title: 'Variant - Static',
    component: <KeyboardDatePickerWrapper variant="static" />,
  },
  {
    title: 'Disable Toolbar',
    component: (
      <KeyboardDatePickerWrapper variant="static" disableToolbar={true} />
    ),
  },
  {
    title: 'Auto OK',
    component: <KeyboardDatePickerWrapper variant="static" autoOk={true} />,
  },
  {
    title: 'Open To',
    component: <KeyboardDatePickerWrapper variant="static" openTo="year" />,
  },
  {
    title: 'Disable Future',
    component: (
      <KeyboardDatePickerWrapper variant="static" disableFuture={true} />
    ),
  },
  {
    title: 'Disable Past',
    component: (
      <KeyboardDatePickerWrapper variant="static" disablePast={true} />
    ),
  },
  {
    title: 'Button Clear',
    component: (
      <KeyboardDatePickerWrapper
        variant="dialog"
        format="dd/MM/yyyy"
        clearable={true}
      />
    ),
  },
  {
    title: 'Views',
    component: <KeyboardDatePickerWrapper variant="static" views={['year']} />,
  },
];
