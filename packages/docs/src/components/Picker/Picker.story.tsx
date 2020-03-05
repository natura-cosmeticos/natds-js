import React, { useState } from 'react';
import withJest from '@decorators/jest/jest';
import withContainer from '@decorators/container/container';
import { Picker } from '@naturacosmeticos/natds-web';


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
   new Date('2014-08-18T21:11:54')
 );

 const handleDateChange = (date: Date | null) => {
   setSelectedDate(date);
 };

 return <Picker value={selectedDate} onChange={handleDateChange} />;
};
