import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { assert, spy } from 'sinon';
import renderer from 'react-test-renderer';

import Switch from '../Components/Switch';

describe('Switch component', () => {
  describe('rendering', () => {
    test('should match to snapshot - Default', () => {
      const component = renderer.create(<Switch />).toJSON();
      expect(component).matchSnapshot('Switch default snapshot');
    });

    test('should match to snapshot - Color', () => {
      const component = renderer.create(<Switch color="primary" />).toJSON();
      expect(component).matchSnapshot('Switch color primary snapshot');
    });

    test('should match to snapshot - Checked', () => {
      const component = renderer.create(<Switch checked />).toJSON();
      expect(component).matchSnapshot('Switch checked snapshot');
    });

    test('should match to snapshot - Disabled', () => {
      const component = renderer.create(<Switch checked />).toJSON();
      expect(component).matchSnapshot('Switch disabled snapshot');
    });
  });

  describe('interaction', () => {
    test('should call onChange', () => {
      const mockOnChange = spy();
      const component = shallow(<Switch onChange={mockOnChange} />);

      component.simulate('change');

      assert.calledOnce(mockOnChange);
    });
  });
});
