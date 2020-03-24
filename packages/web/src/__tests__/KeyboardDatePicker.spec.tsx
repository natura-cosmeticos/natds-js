import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider } from '@material-ui/pickers/MuiPickersUtilsProvider';
import { KeyboardDatePicker } from '../';

const Component = () => {
  const [selectedDate, setSelectedDate] = React.useState<any>(null);

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <KeyboardDatePicker
        value={selectedDate}
        label="Only calendar"
        variant="dialog"
        onChange={setSelectedDate}
      />
    </MuiPickersUtilsProvider>
  );
};

describe('KeyboardDatePicker components', () => {
  test('should match to snapshot - Opened', () => {
    const component = mount(<Component />);
    expect(component).matchSnapshot('KeyboardDatePicker opened snapshot');
  });
});
