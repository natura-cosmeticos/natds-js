import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { assert, spy } from 'sinon';
import renderer from 'react-test-renderer';

import Radio from '../Components/Radio';

describe('Radio component', () => {
  describe('rendering', () => {
    test('should match to snapshot - Default', () => {
      const component = renderer.create(<Radio />).toJSON();
      expect(component).matchSnapshot('Radio default snapshot');
    });

    test('should match to snapshot - Color', () => {
      const component = renderer.create(<Radio color="primary" />).toJSON();
      expect(component).matchSnapshot('Radio color primary snapshot');
    });

    test('should match to snapshot - Checked', () => {
      const component = renderer.create(<Radio checked />).toJSON();
      expect(component).matchSnapshot('Radio checked snapshot');
    });

    test('should match to snapshot - Disabled', () => {
      const component = renderer.create(<Radio checked />).toJSON();
      expect(component).matchSnapshot('Radio disabled snapshot');
    });
  });

  describe('interaction', () => {
    test('should call onChange', () => {
      const mockOnChange = spy();
      const component = shallow(<Radio onChange={mockOnChange} />);

      component.simulate('change');

      assert.calledOnce(mockOnChange);
    });
  });
});
