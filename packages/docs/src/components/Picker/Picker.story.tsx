import React, { useState } from 'react';
import withJest from '@decorators/jest/jest';
import withContainer from '@decorators/container/container';
import { Picker, TextField } from '@naturacosmeticos/natds-web';


export default {
  title: 'Components|Picker',
  component: Picker,
  decorators: [withJest(), withContainer],
  parameters: {
    jestImportPath: 'web',
    jest: ['Picker'],
    theme: {
      context: 'web',
    }
    // docs: {
    //   page: TextFieldDocs,
    // },
  },
};

export const Interactive = () => {

  const [selectedDate, setSelectedDate] = React.useState<Date | null>(
    new Date()
  );

  const [isOpen, setOpen] = React.useState(false);

  const textField = (textFieldProps: any) => (
    <TextField
      {...textFieldProps}
      id="random-prop-id"
      type="text"
      onFocus={() => setOpen(true)}
      onBlur={() => setOpen(false)}
    />
  );

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
  };

  // change the open value to `isOpen`
  return <Picker value={selectedDate} TextFieldComponent={textField} open={isOpen} onChange={handleDateChange} />;
};
