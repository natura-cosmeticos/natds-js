import React, { useState } from 'react';
import withJest from '@decorators/jest/jest';
import withContainer from '@decorators/container/container';
import {
  boolean,
  select,
  text,
  optionsKnob as options,
} from '@storybook/addon-knobs';
import DateFnsUtils from '@date-io/date-fns';

import { makeStyles } from '@material-ui/core/styles';
import {
  KeyboardDatePicker,
  PickersUtilProvider, TextField,
} from '@naturacosmeticos/natds-web';

import KeyboardDatePickerDocs from './KeyboardDatePicker.docs.mdx';

export default {
  title: 'Components|Picker/KeyboardDatePicker',
  component: KeyboardDatePicker,
  decorators: [withJest(), withContainer],
  parameters: {
    jestImportPath: 'web',
    jest: ['KeyboardDatePicker'],
    theme: {
      context: 'web',
    },
    docs: {
      page: KeyboardDatePickerDocs,
    },
  },
};

const variants: any = {
  dialog: 'dialog',
  inline: 'inline',
};

const formats: any = {
  'dd/MM': 'dd/MM',
  'dd/MM/yyyy': 'dd/MM/yyyy',
  'dd/MM/yy': 'dd/MM/yy',
  'MM/yy': 'MM/yy',
};

const valuesInlineCheck = {
  Year: 'year',
  Date: 'date',
  Month: 'month',
};

const openTos: any = {
  date: 'date',
  year: 'year',
  month: 'month',
};

const states: any = {
  success: 'success',
  error: 'error',
  default: undefined
};

export const Interactive = () => {
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
          allowKeyboardControl
          placeholder="10/10/2018"
          helpText={text('helperText', 'Assistive text')}
          value={selectedDate}
          label="Only calendar"
          variant={select('Variant', variants, variants.dialog)}
          openTo={select('OpenTo', openTos, openTos.date)}
          format={select('Formats', formats, formats['dd/MM/yyyy'])}
          disableToolbar={boolean('Disabled Toolbar', false)}
          disableFuture={boolean('Disabled Future', false)}
          disablePast={boolean('Disabled Past', false)}
          animateYearScrolling={boolean('Animate Year Scrolling', false)}
          autoOk={boolean('Auto Ok', false)}
          disabled={boolean('Disabled', false)}
          clearable={boolean('Clearable', false)}
          onChange={setSelectedDate}
          okLabel={text('Ok Label', 'OK')}
          cancelLabel={text('Cancel Label', 'Cancel')}
          clearLabel={text('Clear Label', 'Clear')}
          views={options('Views Check', valuesInlineCheck, ['year'], {
            display: 'inline-check',
          })}
          required={boolean('required', false)}
          state={select('state', states, states.default)}
        />
      </PickersUtilProvider>
    </div>
  );
};
