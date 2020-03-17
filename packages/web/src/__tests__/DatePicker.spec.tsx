import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider } from '@material-ui/pickers/MuiPickersUtilsProvider';
import { DatePicker, TextField } from '../';

const Component = () => {
  const [selectedDate, setSelectedDate] = React.useState(null);

  const textField = (textFieldProps: any) => (
    <TextField {...textFieldProps} id="random-prop-id" type="text" />
  );

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <DatePicker
        value={selectedDate}
        label="Only calendar"
        TextFieldComponent={textField}
        variant="dialog"
        onChange={setSelectedDate}
      />
    </MuiPickersUtilsProvider>
  );
};

describe('DatePicker components', () => {
  test('should match to snapshot - Opened', () => {
    const component = mount(<Component />);
    expect(component).matchSnapshot('DatePicker opened snapshot');
  });
});
