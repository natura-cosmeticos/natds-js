import * as React from 'react';
import {
  DatePicker,
  TextField,
  PickersUtilProvider,
} from '@naturacosmeticos/natds-web';
import DateFnsUtils from '@date-io/date-fns';
import { makeStyles } from '@material-ui/core/styles';

interface DatePickerViewsProps {
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

const DatePickerWrapper = (props: DatePickerViewsProps) => {
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

  const useStyles = makeStyles(theme => ({
    wrapper: {
      display: 'flex',
    },
  }));

  const classes = useStyles();

  const textField = (textFieldProps: any) => (
    <TextField {...textFieldProps} id="random-prop-id" type="text" />
  );

  return (
    <div className={classes.wrapper}>
      <PickersUtilProvider utils={DateFnsUtils}>
        <DatePicker
          TextFieldComponent={textField}
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
    component: <DatePickerWrapper variant="dialog" format="dd/MM/yyyy" />,
  },
  {
    title: 'Variant - Static',
    component: <DatePickerWrapper variant="static" />,
  },
  {
    title: 'Disable Toolbar',
    component: <DatePickerWrapper variant="static" disableToolbar={true} />,
  },
  {
    title: 'Auto OK',
    component: <DatePickerWrapper variant="static" autoOk={true} />,
  },
  {
    title: 'Open To',
    component: <DatePickerWrapper variant="static" openTo="year" />,
  },
  {
    title: 'Disable Future',
    component: <DatePickerWrapper variant="static" disableFuture={true} />,
  },
  {
    title: 'Disable Past',
    component: <DatePickerWrapper variant="static" disablePast={true} />,
  },
  {
    title: 'Button Clear',
    component: (
      <DatePickerWrapper
        variant="dialog"
        format="dd/MM/yyyy"
        clearable={true}
      />
    ),
  },
  {
    title: 'Views',
    component: <DatePickerWrapper variant="static" views={['year']} />,
  },
];
