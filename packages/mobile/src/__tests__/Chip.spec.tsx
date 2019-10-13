import 'react-native';
import React from 'react';
import Chip from '../Components/Chip/Chip';

import { shallow } from 'enzyme';

describe('Chip', () => {
  describe('rendering', () => {
    test('should match to snapshot - Default', () => {
      const component = shallow(<Chip />);
      expect(component).toMatchSnapshot('Default chip snapshot');
    });
  });

  describe('interaction', () => {
    test('should call onPress', () => {
      const mockOnPress = jest.fn();
      const component = shallow(<Chip onPress={mockOnPress} />);

      component.simulate('press');

      expect(mockOnPress).toHaveBeenCalled();
    });
    test('should call onLongPress', () => {
      const mockOnLongPress = jest.fn();
      const component = shallow(<Chip onLongPress={mockOnLongPress} />);

      component.simulate('longPress');

      expect(mockOnLongPress).toHaveBeenCalled();
    });
    test('should call onClose', () => {
      const mockOnClose = jest.fn();
      const component = shallow(<Chip onClose={mockOnClose} />);

      component.simulate('close');

      expect(mockOnClose).toHaveBeenCalled();
    });
  });
});
