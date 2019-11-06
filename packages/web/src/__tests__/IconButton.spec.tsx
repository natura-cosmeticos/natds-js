import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { assert, spy } from 'sinon';
import renderer from 'react-test-renderer';
import Delete from '@material-ui/icons/Delete';

import IconButton from '../Components/IconButton';

describe('IconButton component', () => {
  describe('rendering sizes', () => {
    test('should match snapshot - Size Small', () => {
      const component = renderer.create(<IconButton size="small" children={<Delete />} />).toJSON();
      expect(component).matchSnapshot('Small IconButton snapshot');
    });

    test('should match snapshot - Size Medium', () => {
      const component = renderer.create(<IconButton size="medium" children={<Delete />} />).toJSON();
      expect(component).matchSnapshot('Medium IconButton snapshot');
    });
  });

  describe('interaction', () => {
    test('should call onClick', () => {
      const mockOnClick = spy();
      const component = shallow(<IconButton onClick={mockOnClick} children={<Delete />} />);

      component.simulate('click');

      assert.calledOnce(mockOnClick);
    });
  });
});
