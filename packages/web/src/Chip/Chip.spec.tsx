
import React from 'react';
import { shallow } from 'enzyme'
import { Chip } from './Chip'

test('Chip changes the text after click', () => {
  const chip = shallow(<Chip labelOn="On" labelOff="Off" />);

  expect(chip.text()).toEqual('Off')
  chip.find('input').simulate('change')
  expect(chip.text()).toEqual('On')

  expect(chip).toMatchSnapshot()
})
