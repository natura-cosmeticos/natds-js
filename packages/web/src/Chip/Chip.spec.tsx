
import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';
import { assert, spy } from 'sinon'

import { Chip } from './Chip';

describe('Chip component', () => {
  test('Chip calls onDelete', () => {
    const onDelete = spy()
    const label = 'A Chip Component'
    const chip = mount(<Chip label={label} onDelete={onDelete} />);

    expect(chip.find('.MuiChip-label')).to.have.text(label);

    chip.find('.MuiChip-deleteIcon').first().simulate('click');

    assert.calledOnce(onDelete);

    expect(chip).to.matchSnapshot();
  })
})
