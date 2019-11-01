import React from 'react';
import { mount } from 'enzyme';
import { themes } from '../Themes';
import { Provider } from '../Provider';
import { createMuiTheme } from '@material-ui/core';

describe('Provider component', () => {
  test.skip('It should have the natura theme', () => {
    const provider = mount(<Provider >Mocked</Provider>);
    const muiTheme = createMuiTheme(themes.natura.light);

    expect(provider.find('ThemeProvider').prop('theme')).toStrictEqual(muiTheme);
  });

  test.skip('It should have the provided theme', () => {
    const mockedTheme = createMuiTheme();
    mockedTheme.palette.primary.dark = 'MOCKED';

    const provider = mount(<Provider theme={mockedTheme}>Mocked</Provider>);

    expect(provider.find('ThemeProvider').prop('theme')).toStrictEqual(mockedTheme);
  });
});
