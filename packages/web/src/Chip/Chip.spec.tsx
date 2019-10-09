
import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import Chip from './Chip';

describe('Chip component', function() {
  test('Chip changes the text after click', () => {
    const chip = shallow(<Chip labelOn="On" labelOff="Off" />);

    expect(chip).to.have.text('Off');

    chip.find('input').simulate('change');

    expect(chip).to.have.text('On');

    expect(chip).to.matchSnapshot();
  })
})
