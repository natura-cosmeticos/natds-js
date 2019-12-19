import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import { Avatar } from '../../index';
import { themes } from '@naturacosmeticos/natds-styles';

describe('Avatar', () => {
  describe('rendering', () => {
    const mockTheme: any = themes.natura.light;

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

    test('should match to snapshot - AvatarSize Tiny', () => {
      const component = renderer
        .create(
          <Avatar
            type="image"
            label=""
            icon=""
            source={{}}
            theme={mockTheme}
            avatarSizes="tiny"
          />
        )
        .toJSON();
      expect(component).toMatchSnapshot('AvatarSize Tiny Avatar snapshot');
    });

    test('should match to snapshot - AvatarSize Small', () => {
      const component = renderer
        .create(
          <Avatar
            type="image"
            label=""
            icon=""
            source={{}}
            theme={mockTheme}
            avatarSizes="small"
          />
        )
        .toJSON();
      expect(component).toMatchSnapshot('AvatarSize Small Avatar snapshot');
    });

    test('should match to snapshot - AvatarSize Standard', () => {
      const component = renderer
        .create(
          <Avatar
            type="image"
            label=""
            icon=""
            source={{}}
            theme={mockTheme}
            avatarSizes="standard"
          />
        )
        .toJSON();
      expect(component).toMatchSnapshot('AvatarSize Standard Avatar snapshot');
    });

    test('should match to snapshot - AvatarSize Large', () => {
      const component = renderer
        .create(
          <Avatar
            type="image"
            label=""
            icon=""
            source={{}}
            theme={mockTheme}
            avatarSizes="large"
          />
        )
        .toJSON();
      expect(component).toMatchSnapshot('AvatarSize Large Avatar snapshot');
    });

    test('should match to snapshot - AvatarSize Huge', () => {
      const component = renderer
        .create(
          <Avatar
            type="image"
            label=""
            icon=""
            source={{}}
            theme={mockTheme}
            avatarSizes="huge"
          />
        )
        .toJSON();
      expect(component).toMatchSnapshot('AvatarSize Huge Avatar snapshot');
    });

    test('should match to snapshot - AvatarSize No Theme', () => {
      const component = renderer
        .create(
          <Avatar
            type="image"
            label=""
            icon=""
            source={{}}
            theme={{}}
            avatarSizes="standard"
          />
        )
        .toJSON();
      expect(component).toMatchSnapshot('AvatarSize No Theme Avatar snapshot');
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
