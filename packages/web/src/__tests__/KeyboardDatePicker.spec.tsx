import * as React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider } from '@material-ui/pickers/MuiPickersUtilsProvider';
import { KeyboardDatePicker, IKeyboardDatePickerViewsProps } from '../';
import { themes } from '@naturacosmeticos/natds-styles';

const Component = (props: IKeyboardDatePickerViewsProps) => (
  <MuiPickersUtilsProvider utils={DateFnsUtils}>
    <KeyboardDatePicker label="Only calendar" variant="dialog" {...props} />
  </MuiPickersUtilsProvider>
);

describe('KeyboardDatePicker components', () => {
  test('should match to snapshot - Opened', () => {
    const component = mount(
      <Component onChange={() => null} value={null} state={undefined} open />
    );

    expect(component).matchSnapshot('KeyboardDatePicker opened snapshot');
  });

  test('should match to snapshot - Error state', () => {
    const component = mount(
      <Component
        onChange={() => null}
        value={null}
        state="error"
        theme={themes.natura.light}
      />
    );
    expect(component).matchSnapshot('KeyboardDatePicker error state snapshot');
  });

  test('should match to snapshot - Success state', () => {
    const component = mount(
      <Component
        onChange={() => null}
        value={null}
        state="success"
        theme={themes.natura.light}
      />
    );
    expect(component).matchSnapshot(
      'KeyboardDatePicker success state snapshot'
    );
  });

  test('should match to snapshot - Default state', () => {
    const component = mount(
      <Component
        onChange={() => null}
        value={null}
        state={undefined}
        theme={themes.natura.light}
      />
    );
    expect(component).matchSnapshot(
      'KeyboardDatePicker default state snapshot'
    );
  });

  test('should match to snapshot - Required', () => {
    const component = mount(
      <Component
        onChange={() => null}
        value={null}
        state={undefined}
        required
      />
    );
    expect(component).matchSnapshot('KeyboardDatePicker required snapshot');
  });

  test('should match to snapshot - Disabled', () => {
    const component = mount(
      <Component
        onChange={() => null}
        value={null}
        state={undefined}
        disabled
      />
    );
    expect(component).matchSnapshot('KeyboardDatePicker disabled snapshot');
  });

  test('should match to snapshot - Help text', () => {
    const component = mount(
      <Component
        onChange={() => null}
        value={null}
        state={undefined}
        helpText="Help me"
      />
    );
    expect(component).matchSnapshot('KeyboardDatePicker helpText snapshot');
  });

  test('should match to snapshot - Static variant', () => {
    const component = mount(
      <Component
        onChange={() => null}
        value={null}
        state={undefined}
        variant="static"
      />
    );
    expect(component).matchSnapshot('KeyboardDatePicker static variant snapshot');
  });
});
