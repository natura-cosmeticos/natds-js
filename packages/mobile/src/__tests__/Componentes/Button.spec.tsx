import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import Button from '../../Components/Button';
import { shallow } from 'enzyme';

describe('Button', () => {
  describe('rendering', () => {
    test('should match to snapshot - Default', () => {
      const component = renderer.create(<Button children />).toJSON();
      expect(component).toMatchSnapshot('Default button snapshot');
    });

    test('should match to snapshot - Mode', () => {
      const component = renderer
        .create(<Button children mode="contained" />)
        .toJSON();
      expect(component).toMatchSnapshot('Mode button snapshot');
    });

    test('should match to snapshot - Dark', () => {
      const component = renderer
        .create(<Button children dark={true} mode="contained" />)
        .toJSON();
      expect(component).toMatchSnapshot('Dark button snapshot');
    });

    test('should match to snapshot - Compact', () => {
      const component = renderer
        .create(<Button children compact={true} mode="text" />)
        .toJSON();
      expect(component).toMatchSnapshot('Compact button snapshot');
    });

    test('should match to snapshot - Loading', () => {
      const component = renderer
        .create(<Button children loading={true} />)
        .toJSON();
      expect(component).toMatchSnapshot('Loading button snapshot');
    });

    test('should match to snapshot - Icon', () => {
      const component = renderer
        .create(<Button children icon="camera" />)
        .toJSON();
      expect(component).toMatchSnapshot('Icon button snapshot');
    });

    test('should match to snapshot - Disabled', () => {
      const component = renderer
        .create(<Button children disabled={true} />)
        .toJSON();
      expect(component).toMatchSnapshot('Disabled button snapshot');
    });

    test('should match to snapshot - AccessibilityLabel', () => {
      const component = renderer
        .create(<Button children accessibilityLabel="accessibilityLabel" />)
        .toJSON();
      expect(component).toMatchSnapshot('AccessibilityLabel button snapshot');
    });
  });

  describe('interaction', () => {
    test('should call onPress', () => {
      const mockOnPress = jest.fn();
      const component = shallow(<Button children onPress={mockOnPress} />);

      component.props().onPress();

      expect(mockOnPress).toHaveBeenCalled();
    });
  });
});
