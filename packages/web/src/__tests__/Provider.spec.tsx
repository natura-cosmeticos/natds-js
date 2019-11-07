import React from 'react';
import { mount } from 'enzyme';
import { themes } from '../Themes';
import { Provider } from '../Provider';
import { createMuiTheme } from '@material-ui/core';

describe('Provider component', () => {
  test('It should have the natura theme', () => {
    const provider = mount(<Provider>Mocked</Provider>);
    const muiTheme = createMuiTheme(themes.natura.light);
    const theme = provider.find('ThemeProvider').prop('theme');

    expect(JSON.stringify(theme)).toStrictEqual(JSON.stringify(muiTheme));
  });

  test('It should have the provided theme', () => {
    const mockedTheme = themes.natura.dark;
    mockedTheme.palette = {
      ...mockedTheme.palette,
      primary: {
        main: '#000000',
      }
    };

    const provider = mount(<Provider theme={mockedTheme}>Mocked</Provider>);
    const theme = provider.find('ThemeProvider').prop('theme');

    expect(JSON.stringify(theme)).toStrictEqual(JSON.stringify(createMuiTheme(mockedTheme)));
  });
});
