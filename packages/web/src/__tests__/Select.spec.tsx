test.skip('Alert component not finished yet', () => true);

// Component not finished yet
/*import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';
import { Select, InputLabel, FormControl, MenuItem, FormHelperText } from '../';

const Component = () => {
  const [age, setAge] = React.useState('');

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setAge(event.target.value as string);
  };

  return (
    <FormControl>
      <InputLabel shrink>Select Simples With Help Text</InputLabel>
      <Select value={age} onChange={handleChange} displayEmpty>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </Select>
      <FormHelperText>Some important helper text</FormHelperText>
    </FormControl>
  );
};

describe('Select components', () => {
  test('should match to snapshot - Show', () => {
    const component = mount(<Component />);
    expect(component).matchSnapshot('Select Show snapshot');
  });
});*/
