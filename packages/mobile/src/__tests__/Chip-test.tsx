import 'react-native';
import React from 'react';
import Chip from '../Chip/Chip';

import renderer from 'react-test-renderer';

it('renders chip correctly', () => {
  const chip = renderer.create(<Chip />).toJSON();
  expect(chip).toMatchSnapshot();
});
