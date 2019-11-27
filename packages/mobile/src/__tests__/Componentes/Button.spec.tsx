import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

import { Button } from '../../index';
import { themes } from '@naturacosmeticos/natds-styles';

describe('Button', () => {
  describe('rendering', () => {
    const mockTheme: any = themes.natura.light;

    test('should match to snapshot - Default', () => {
      const component = renderer.create(<Button children />).toJSON();
      expect(component).toMatchSnapshot('Default button snapshot');
    });

    test('should match to snapshot - Mode Contained', () => {
      const component = renderer
        .create(<Button children mode="contained" />)
        .toJSON();
      expect(component).toMatchSnapshot('Mode Contained button snapshot');
    });

    test('should match to snapshot - Mode Outlined', () => {
      const component = renderer
        .create(<Button children mode="outlined" />)
        .toJSON();
      expect(component).toMatchSnapshot('Mode Outlined button snapshot');
    });

    test('should match to snapshot - Mode Text', () => {
      const component = renderer
        .create(<Button children mode="text" />)
        .toJSON();
      expect(component).toMatchSnapshot('Mode Text button snapshot');
    });

    test('should match to snapshot - Mode Text Default Color', () => {
      const component = renderer
        .create(<Button children mode="text" colorType="default" />)
        .toJSON();
      expect(component).toMatchSnapshot(
        'Mode Text Default Color button snapshot'
      );
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

    test('should match to snapshot - ColorType Primary', () => {
      const component = renderer
        .create(<Button children colorType="primary" />)
        .toJSON();
      expect(component).toMatchSnapshot('ColorType Primary button snapshot');
    });

    test('should match to snapshot - ColorType Secondary', () => {
      const component = renderer
        .create(<Button children colorType="secondary" />)
        .toJSON();
      expect(component).toMatchSnapshot('ColorType Secondary button snapshot');
    });

    test('should match to snapshot - Elevation', () => {
      const component = renderer
        .create(<Button children elevation={3} />)
        .toJSON();
      expect(component).toMatchSnapshot('Elevation button snapshot');
    });

    test('should match to snapshot - Size small', () => {
      const component = renderer
        .create(
          <Button children elevation={3} theme={mockTheme} size="small" />
        )
        .toJSON();
      expect(component).toMatchSnapshot('Size small button snapshot');
    });

    test('should match to snapshot - Size medium', () => {
      const component = renderer
        .create(
          <Button children elevation={3} theme={mockTheme} size="medium" />
        )
        .toJSON();
      expect(component).toMatchSnapshot('Size medium button snapshot');
    });

    test('should match to snapshot - Size large', () => {
      const component = renderer
        .create(
          <Button children elevation={3} theme={mockTheme} size="large" />
        )
        .toJSON();
      expect(component).toMatchSnapshot('Size large button snapshot');
    });

    test('should match to snapshot - No Theme', () => {
      const component = renderer
        .create(<Button children elevation={3} theme={{}} />)
        .toJSON();
      expect(component).toMatchSnapshot('No Theme button snapshot');
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
