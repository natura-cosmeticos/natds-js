import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import { Avatar } from '../../index';

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
        .create(<Avatar type="icon" label="" icon="" source={{}} />)
        .toJSON();
      expect(component).toMatchSnapshot('Default Avatar type icon snapshot');
    });

    test('should match to snapshot - Size', () => {
      const component = renderer
        .create(<Avatar type="image" label="" icon="" source={{}} size={18} />)
        .toJSON();
      expect(component).toMatchSnapshot('Size Avatar snapshot');
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
