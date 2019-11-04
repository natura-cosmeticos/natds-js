import 'react-native';
import React from 'react';
import { shallow } from 'enzyme';

import Provider from '../Provider';
import { themes } from '../Themes';
import { ThemeBuilder } from '../Themes/ThemeBuilder';

describe('Provider', () => {
  describe('rendering', () => {
    test('should match the default natura light theme', () => {
      const transformedTheme = ThemeBuilder(themes.natura.light);
      const provider = shallow(<Provider children />);
      const { theme } = provider.props();

      expect(theme).toStrictEqual(transformedTheme);
    });

    test('should match the provided theme', () => {
      const mockedTheme = { ...themes.natura.light };
      Object.assign(mockedTheme, { primary: { main: 'MOCKED' }});
      const transformedTheme = ThemeBuilder(mockedTheme);

      const provider = shallow(<Provider children theme={mockedTheme} />);
      const { theme } = provider.props();

      expect(theme).toStrictEqual(transformedTheme);
    });
  });
});
