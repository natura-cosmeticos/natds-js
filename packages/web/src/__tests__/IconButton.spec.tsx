import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { assert, spy } from 'sinon';
import renderer from 'react-test-renderer';

import IconButton from '../Components/IconButton';

const MockedIcon = () => {
  return (
    <i />
  );
};

describe('IconButton component', () => {
  describe('rendering sizes', () => {
    test('should match snapshot - Size Small', () => {
      const component = renderer.create(<IconButton size="small" children={<MockedIcon />} />).toJSON();
      expect(component).matchSnapshot('Small IconButton snapshot');
    });

    test('should match snapshot - Size Medium', () => {
      const component = renderer.create(<IconButton size="medium" children={<MockedIcon />} />).toJSON();
      expect(component).matchSnapshot('Medium IconButton snapshot');
    });
  });

  describe('interaction', () => {
    test('should call onClick', () => {
      const mockOnClick = spy();
      const component = shallow(<IconButton onClick={mockOnClick} children={<MockedIcon />} />);

      component.simulate('click');

      assert.calledOnce(mockOnClick);
    });
  });
});
