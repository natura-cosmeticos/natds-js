import 'react-native';
import React from 'react';
import Provider from '../Provider';
import { natura } from '../Themes';

import { shallow } from 'enzyme';

describe('Provider', () => {
  describe('rendering', () => {
    test('should match the default natura light theme', () => {
      const provider = shallow(<Provider children />);
      const { theme } = provider.props();

      expect(theme).toStrictEqual(natura.light);
    });

    test('should match the provided theme', () => {
      const mockedTheme = {
        ...natura.light
      };

      mockedTheme.colors.primary = 'MOCKED';

      const provider = shallow(<Provider children theme={mockedTheme} />);
      const { theme } = provider.props();

      expect(theme).toStrictEqual(mockedTheme);
    });
  });
});
