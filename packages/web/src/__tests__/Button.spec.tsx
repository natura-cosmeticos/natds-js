import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { assert, spy } from 'sinon';
import renderer from 'react-test-renderer';

import Button from '../Components/Button';

const label = 'A Button Component';

describe('Button component', () => {
  describe('rendering sizes', () => {
    test('should match snapshot - Size Small', () => {
      const component = renderer.create(<Button size="small">{label}</Button>).toJSON();
      expect(component).matchSnapshot('Small Button snapshot');
    });

    test('should match snapshot - Size Medium', () => {
      const component = renderer.create(<Button size="medium">{label}</Button>).toJSON();
      expect(component).matchSnapshot('Medium Button snapshot');
    });

    test('should match snapshot - Size Large', () => {
      const component = renderer.create(<Button size="large">{label}</Button>).toJSON();
      expect(component).matchSnapshot('Medium Button snapshot');
    });
  });

  describe('rendering variants', () => {
    test('should match snapshot - Low emphasis button (variant text)', () => {
      const component = renderer.create(<Button variant="text">{label}</Button>).toJSON();

      expect(component).to.matchSnapshot('Low emphasis Button snapshot');
    });

    test('should match snapshot - Medium emphasis button (variant outlined)', () => {
      const component = renderer.create(<Button variant="outlined">{label}</Button>).toJSON();

      expect(component).to.matchSnapshot('Medium emphasis Button snapshot');
    });

    test('should match snapshot - High emphasis button (variant contained)', () => {
      const component = renderer.create(<Button variant="contained">{label}</Button>).toJSON();

      expect(component).to.matchSnapshot('High emphasis Button snapshot');
    });
  });

  describe('interaction', () => {
    test('should call onClick', () => {
      const mockOnClick = spy();
      const component = shallow(<Button onClick={mockOnClick} />);

      component.simulate('click');

      assert.calledOnce(mockOnClick);
    });
  });
});
