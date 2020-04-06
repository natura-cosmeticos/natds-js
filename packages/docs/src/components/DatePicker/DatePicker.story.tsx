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
import { DatePicker, PickersUtilProvider } from '@naturacosmeticos/natds-web';

import DatePickerDocs from './DatePicker.docs.mdx';

export default {
  title: 'Components|Picker/DatePicker',
  component: DatePicker,
  decorators: [withJest(), withContainer],
  parameters: {
    jestImportPath: 'web',
    jest: ['DatePicker'],
    theme: {
      context: 'web',
    },
    docs: {
      page: DatePickerDocs,
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
        <DatePicker
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
          views={options('Views Check', valuesInlineCheck, ['year'], {
            display: 'inline-check',
          })}
          onChange={setSelectedDate}
          cancelLabel={text('Cancel Label', 'Cancel')}
          clearLabel={text('Clear Label', 'Clear')}
          okLabel={text('OK Label', 'OK')}
        />
      </PickersUtilProvider>
    </div>
  );
};
