import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';

import GridContainer from '../Components/GridContainer';

describe('GridContainer component', () => {
  test('should match to snapshot', () => {
    const grid = mount(<GridContainer />);

    expect(grid).to.matchSnapshot();
  });
});
