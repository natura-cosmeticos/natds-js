import 'react-native';
import React from 'react';
import Chip from '../Components/Chip';

import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

describe('Chip', () => {
  describe('rendering', () => {
    test('should match to snapshot - Default', () => {
      const component = renderer.create(<Chip children />).toJSON();
      expect(component).toMatchSnapshot('Default chip snapshot');
    });

    test('should match to snapshot - Icon', () => {
      const component = renderer.create(<Chip children icon="add" />).toJSON();
      expect(component).toMatchSnapshot('Icon chip snapshot');
    });

    test('should match to snapshot - Avatar', () => {
      const component = renderer
        .create(<Chip children avatar="avatar" />)
        .toJSON();
      expect(component).toMatchSnapshot('Avatar chip snapshot');
    });

    test('should match to snapshot - Selected', () => {
      const component = renderer
        .create(<Chip children selected={true} />)
        .toJSON();
      expect(component).toMatchSnapshot('Selected chip snapshot');
    });

    test('should match to snapshot - SelectedColor', () => {
      const component = renderer
        .create(<Chip children selectedColor="red" />)
        .toJSON();
      expect(component).toMatchSnapshot('SelectedColor chip snapshot');
    });

    test('should match to snapshot - Disabled', () => {
      const component = renderer
        .create(<Chip children disabled={true} />)
        .toJSON();
      expect(component).toMatchSnapshot('Disabled chip snapshot');
    });

    test('should match to snapshot - AccessibilityLabel', () => {
      const component = renderer
        .create(<Chip children accessibilityLabel="accessibilityLabel" />)
        .toJSON();
      expect(component).toMatchSnapshot('AccessibilityLabel chip snapshot');
    });

    test('should match to snapshot - TextStyle', () => {
      const component = renderer
        .create(<Chip children textStyle={{}} />)
        .toJSON();
      expect(component).toMatchSnapshot('TextStyle chip snapshot');
    });

    test('should match to snapshot - Style', () => {
      const component = renderer
        .create(<Chip children style="style" />)
        .toJSON();
      expect(component).toMatchSnapshot('Style chip snapshot');
    });

    test('should match to snapshot - Theme', () => {
      const component = renderer.create(<Chip children theme={{}} />).toJSON();
      expect(component).toMatchSnapshot('Theme chip snapshot');
    });

    test('should match to snapshot - TestID', () => {
      const component = renderer
        .create(<Chip children testID="testID" />)
        .toJSON();
      expect(component).toMatchSnapshot('TestID chip snapshot');
    });
  });

  describe('interaction', () => {
    test('should call onPress', () => {
      const mockOnPress = jest.fn();
      const component = shallow(<Chip children onPress={mockOnPress} />);

      component
        .props()
        .children()
        .props.onPress();

      expect(mockOnPress).toHaveBeenCalled();
    });
    test('should call onClose', () => {
      const mockOnClose = jest.fn();
      const component = shallow(<Chip children onClose={mockOnClose} />);

      component
        .props()
        .children()
        .props.onClose();

      expect(mockOnClose).toHaveBeenCalled();
    });
  });
});