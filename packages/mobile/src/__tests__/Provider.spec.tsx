import 'react-native';
import React from 'react';
import { shallow } from 'enzyme';

import Provider from '../Provider';
import { themes } from '../Themes';
import { buildTheme } from '../Themes/buildTheme';

describe('Provider', () => {
  describe('rendering', () => {
    test('should match the default natura light theme', () => {
      const transformedTheme = buildTheme(undefined, themes.natura.light);
      const provider = shallow(<Provider children />);
      const { theme } = provider.props();

      expect(theme).toStrictEqual(transformedTheme);
    });

    test('should match the provided theme', () => {
      const mockedTheme = { ...themes.natura.light };
      Object.assign(mockedTheme, { primary: { main: 'MOCKED' }});
      const transformedTheme = buildTheme(mockedTheme, themes.natura.light);

      const provider = shallow(<Provider children theme={mockedTheme} />);
      const { theme } = provider.props();

      expect(theme).toStrictEqual(transformedTheme);
    });
  });
});
