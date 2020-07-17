import * as React from 'react';
import * as renderer from 'react-test-renderer';

import { shallow } from 'enzyme';
import { expect } from 'chai';
import { assert, spy } from 'sinon';

import { IconButton } from '../Components/IconButton';

const MockedIcon = () => <i />;

describe('IconButton component', () => {
  describe('rendering sizes', () => {
    test('should match snapshot - Size Small', () => {
      const component = renderer.create(<IconButton size="small"><MockedIcon /></IconButton>).toJSON();

      expect(component).matchSnapshot('Small IconButton snapshot');
    });

    test('should match snapshot - Size Medium', () => {
      const component = renderer.create(<IconButton size="medium"><MockedIcon /></IconButton>).toJSON();

      expect(component).matchSnapshot('Medium IconButton snapshot');
    });
  });

  describe('interaction', () => {
    test('should call onClick', () => {
      const mockOnClick = spy();
      const component = shallow(<IconButton onClick={mockOnClick}><MockedIcon /></IconButton>);

      component.simulate('click');

      assert.calledOnce(mockOnClick);
    });
  });
});
