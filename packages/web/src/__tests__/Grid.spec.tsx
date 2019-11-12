import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';

import GridContainer from '../Components/GridContainer';
import GridItem from '../Components/GridItem';

describe('GridContainer component', () => {
  test('should match to snapshot', () => {
    const grid = mount(<GridContainer />);

    expect(grid).to.matchSnapshot();
  });
});

describe('GridItem component', () => {
  test('should match to snapshot', () => {
    const item = mount(<GridItem />);

    expect(item).to.matchSnapshot();
  });
});
