import React from 'react';
import { expect } from 'chai';
import renderer from 'react-test-renderer';

import Icon from '../Components/Icon';

describe('Icon component', () => {
  test('should match snapshot - Default Icon', () => {
    const component = renderer.create(<Icon name="outlined-alert-cancel" />).toJSON();
    expect(component).matchSnapshot('Icon snapshot - default');
  });
});
