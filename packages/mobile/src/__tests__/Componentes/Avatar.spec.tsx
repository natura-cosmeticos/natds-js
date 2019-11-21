import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import { Avatar } from '../../index';
import { IThemeShape } from '../../Provider/IThemeShape';

describe('Avatar', () => {
  describe('rendering', () => {
    test('should match to snapshot - Default Image', () => {
      const component = renderer
        .create(<Avatar type="image" label="" icon="" source={{}} />)
        .toJSON();
      expect(component).toMatchSnapshot('Default Avatar type image snapshot');
    });

    test('should match to snapshot - Default Text', () => {
      const component = renderer
        .create(<Avatar type="text" label="" icon="" source={{}} />)
        .toJSON();
      expect(component).toMatchSnapshot('Default Avatar type text snapshot');
    });

    test('should match to snapshot - Default Icon', () => {
      const component = renderer
        .create(<Avatar type="icon" label="" icon="delete" source={{}} />)
        .toJSON();
      expect(component).toMatchSnapshot('Default Avatar type icon snapshot');
    });

    test('should match to snapshot - AvatarSize Default', () => {
      const component = renderer
        .create(<Avatar type="image" label="" icon="" source={{}} />)
        .toJSON();
      expect(component).toMatchSnapshot('AvatarSize Default Avatar snapshot');
    });

    test('should match to snapshot - AvatarSize XLarge', () => {
      const mockTheme: IThemeShape = {
        dark: false,
        roundness: 0,
        colors: {
          primary: '',
          secondary: '',
          background: '',
          surface: '',
          accent: '',
          error: '',
          text: '',
          onSurface: '',
          onBackground: '',
          disabled: '',
          placeholder: '',
          backdrop: '',
          notification: '',
        },
        fonts: undefined,
        typography: undefined,
        animation: undefined,
        avatarSizes: {
          tiny: { size: 24, fontSize: '.625rem' },
          small: { size: 32, fontSize: '.875rem' },
          standard: { size: 40, fontSize: '1rem' },
          large: { size: 48, fontSize: '1rem' },
          xlarge: { size: 80, fontSize: '1.5rem' },
        },
      };

      const component = renderer
        .create(
          <Avatar
            type="image"
            label=""
            icon=""
            source={{}}
            theme={mockTheme}
            avatarSizes="xlarge"
          />
        )
        .toJSON();
      expect(component).toMatchSnapshot('AvatarSize XLarge Avatar snapshot');
    });

    test('should match to snapshot - Style', () => {
      const component = renderer
        .create(<Avatar type="image" label="" icon="" source={{}} style={{}} />)
        .toJSON();
      expect(component).toMatchSnapshot('Style Avatar snapshot');
    });

    test('should match to snapshot - Theme', () => {
      const component = renderer
        .create(<Avatar type="image" label="" icon="" source={{}} theme={{}} />)
        .toJSON();
      expect(component).toMatchSnapshot('Theme Avatar snapshot');
    });

    test('should match to snapshot - Color', () => {
      const component = renderer
        .create(<Avatar type="image" label="" icon="" source={{}} color="" />)
        .toJSON();
      expect(component).toMatchSnapshot('Color Avatar snapshot');
    });

    test('should match to snapshot - LabelStyle', () => {
      const component = renderer
        .create(
          <Avatar type="image" label="" icon="" source={{}} labelStyle={{}} />
        )
        .toJSON();
      expect(component).toMatchSnapshot('LabelStyle Avatar snapshot');
    });
  });
});
