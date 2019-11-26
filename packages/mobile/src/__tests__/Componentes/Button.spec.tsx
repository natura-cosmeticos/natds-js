import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

import { Button } from '../../index';
import { IThemeShape } from '../../Provider/IThemeShape';

describe('Button', () => {
  describe('rendering', () => {
    const mockTheme: IThemeShape = {
      dark: false,
      roundness: 4,
      colors: {
        primary: '#F4AB34',
        textSecondary: '#333333',
        textHint: '#BBBBBB',
        accent: '#FF6B0B',
        background: '#FFFFFF',
        surface: '#FAFAFA',
        error: '#E74627',
        success: '#569A32',
        text: '#333333',
        onBackground: '#333333',
        onSurface: '#333333',
        disabled: '#EEEEEE',
        placeholder: '#BBBBBB',
        backdrop: 'rgba(0, 0, 0, 0.5)',
        notification: '#f50057',
        secondary: '#FF6B0B',
      },
      fonts: {
        regular: {
          fontFamily: 'System',
          fontWeight: '400',
        },
        medium: {
          fontFamily: 'System',
          fontWeight: '500',
        },
        light: {
          fontFamily: 'System',
          fontWeight: '300',
        },
        thin: {
          fontFamily: 'System',
          fontWeight: '300',
        },
      },
      animation: {
        scale: 1,
      },
      spacing: 8,
      typography: {
        h1: {
          fontSize: 96,
          fontFamily: 'System',
          fontWeight: 300,
        },
        h2: {
          fontSize: 60,
          fontFamily: 'System',
          fontWeight: 300,
        },
        h3: {
          fontSize: 48,
          fontFamily: 'System',
          fontWeight: 400,
        },
        h4: {
          fontSize: 34,
          fontFamily: 'System',
          fontWeight: 400,
        },
        h5: {
          fontSize: 24,
          fontFamily: 'System',
          fontWeight: 400,
        },
        h6: {
          fontSize: 20,
          fontFamily: 'System',
          fontWeight: 600,
        },
        body1: {
          fontSize: 16,
          fontFamily: 'System',
          fontWeight: 400,
        },
        body2: {
          fontSize: 14,
          fontFamily: 'System',
          fontWeight: 400,
        },
        subtitle1: {
          fontSize: 16,
          fontFamily: 'System',
          fontWeight: 400,
        },
        subtitle2: {
          fontSize: 14,
          fontFamily: 'System',
          fontWeight: 500,
        },
        caption: {
          fontSize: 12,
          fontFamily: 'System',
          fontWeight: 400,
        },
        overline: {
          fontSize: 14,
          fontFamily: 'System',
          fontWeight: 400,
          textTransform: 'uppercase',
        },
        button: {
          fontSize: 14,
          fontFamily: 'System',
          fontWeight: 600,
          textTransform: 'uppercase',
        },
      },
      avatarSizes: {
        tiny: {
          size: 24,
          fontSize: '.625rem',
        },
        small: {
          size: 32,
          fontSize: '.875rem',
        },
        standard: {
          size: 40,
          fontSize: '1rem',
        },
        large: {
          size: 48,
          fontSize: '1rem',
        },
        xlarge: {
          size: 80,
          fontSize: '1.5rem',
        },
      },
      buttonSize: {
        small: {
          paddingTop: 4,
          paddingRight: 10,
          paddingBottom: 4,
          paddingLeft: 10,
          minHeight: 32,
        },
        medium: {
          paddingTop: 8,
          paddingRight: 16,
          paddingBottom: 8,
          paddingLeft: 16,
          minHeight: 40,
        },
        large: {
          paddingTop: 8,
          paddingRight: 22,
          paddingBottom: 8,
          paddingLeft: 22,
          minHeight: 48,
        },
      },
    };

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
