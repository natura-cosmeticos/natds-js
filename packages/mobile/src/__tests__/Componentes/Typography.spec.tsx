import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import Typography from '../../Components/Typography';
import Provider from '../../Provider';
import { themes } from '../../Themes';

describe('Typography', () => {
  test('it should render', () => {
    expect(() =>
      renderer.create(<Typography variant="h1">teste</Typography>)
    ).not.toThrowError();
  });

  test('it should render the children', () => {
    const component = renderer.create(
      <Typography variant="h1">test</Typography>
    );

    const componentJSON = component.toJSON();

    if (componentJSON) {
      const text: any = componentJSON;
      expect(text.children[0]).toBe('test');
    } else {
      fail('componentJSON should not be null');
    }
  });

  test('it should use the default variant', () => {
    const component = renderer.create(
      <Provider>
        <Typography>test</Typography>
      </Provider>
    );

    const componentJSON = component.toJSON();
    const firstChild: any = componentJSON.children[0];

    expect(firstChild.props.style).toMatchObject(
      expect.objectContaining({
        fontSize: 16,
        fontFamily: 'System',
        fontWeight: '400',
      })
    );
  });

  test('it should use the variant based on the theme', () => {
    const theme = themes.natura.light;
    theme.typography.h1 = {
      fontSize: '27rem',
      fontWeight: 300
    };

    const component = renderer.create(
      <Provider theme={theme}>
        <Typography variant="h1">test</Typography>
      </Provider>
    );

    const componentJSON = component.toJSON();
    const firstChild: any = componentJSON.children[0];

    expect(firstChild.props.style).toMatchObject({
      fontSize: 432,
      fontFamily: 'System',
      fontWeight: '300',
    });
  });

  test('it should use the fontSize without "rem"', () => {
    const theme = themes.natura.light;
    theme.typography.h1 = {
      fontSize: '27',
      fontWeight: 300
    };

    const component = renderer.create(
      <Provider theme={theme}>
        <Typography variant="h1">test</Typography>
      </Provider>
    );

    const componentJSON = component.toJSON();
    const firstChild: any = componentJSON.children[0];

    expect(firstChild.props.style).toMatchObject({
      fontSize: 27,
    });
  });

  test('it should use the provided color based on the theme', () => {
    const theme = themes.natura.light;
    theme.palette.primary.main = '#ABABAB';

    const component = renderer.create(
      <Provider theme={theme}>
        <Typography variant="body1" color="primary">
          test
        </Typography>
      </Provider>
    );

    const componentJSON = component.toJSON();
    const firstChild: any = componentJSON.children[0];

    expect(firstChild.props.style.color).toBe('#ABABAB');
  });

  test('it should provide no color when no color is passed on to Typography', () => {
    const theme = themes.natura.light;

    const component = renderer.create(
      <Provider theme={theme}>
        <Typography variant="body1">test</Typography>
      </Provider>
    );

    const componentJSON = component.toJSON();
    const firstChild: any = componentJSON.children[0];

    expect(firstChild.props.style.color).toBe(undefined);
  });

  test('it should inject the provided text align', () => {
    const theme = themes.natura.light;

    const component = renderer.create(
      <Provider theme={theme}>
        <Typography variant="body1" align="justify">
          test
        </Typography>
      </Provider>
    );

    const componentJSON = component.toJSON();
    const firstChild: any = componentJSON.children[0];

    expect(firstChild.props.style.textAlign).toBe('justify');
  });

  test('it should inject "undefined" textAlign when no align prop is provided', () => {
    const theme = themes.natura.light;

    const component = renderer.create(
      <Provider theme={theme}>
        <Typography variant="body1">test</Typography>
      </Provider>
    );

    const componentJSON = component.toJSON();
    const firstChild: any = componentJSON.children[0];

    expect(firstChild.props.style.textAlign).toBe(undefined);
  });

  test('it should inject the provided style', () => {
    const theme = themes.natura.light;

    const component = renderer.create(
      <Provider theme={theme}>
        <Typography variant="body1" style={{ flex: 1, flexGrow: 1 }}>
          test
        </Typography>
      </Provider>
    );

    const componentJSON = component.toJSON();
    const firstChild: any = componentJSON.children[0];

    expect(firstChild.props.style).toEqual(
      expect.objectContaining({
        flex: 1,
        flexGrow: 1,
      })
    );
  });

  test('it should override the theme props', () => {
    const theme = themes.natura.light;

    const component = renderer.create(
      <Provider theme={theme}>
        <Typography
          variant="body1"
          color="primary"
          theme={{ colors: { primary: '#123456' } }}
        >
          test
        </Typography>
      </Provider>
    );

    const componentJSON = component.toJSON();
    const firstChild: any = componentJSON.children[0];

    expect(firstChild.props.style.color).toBe('#123456');
  });

  test('it should render when the theme props is altered', () => {
    const theme = themes.natura.light;

    expect(() =>
      renderer.create(
        <Provider theme={theme}>
          <Typography
            variant="body1"
            color="secondary"
            theme={{ colors: { primary: '#123456' } }}
          >
            test
          </Typography>
        </Provider>
      )
    ).not.toThrowError();
  });

  test('it should render when the default theme when theme props is altered but not used', () => {
    const theme = themes.natura.light;
    const component = renderer.create(
      <Provider theme={theme}>
        <Typography
          variant="body1"
          color="secondary"
          theme={{ colors: { primary: '#123456' } }}
        >
          test
        </Typography>
      </Provider>
    );

    const componentJSON = component.toJSON();
    const firstChild: any = componentJSON.children[0];

    expect(firstChild.props.style.color).toEqual(theme.palette.secondary.main);
  });

  test('it should set the accessible flag to true', () => {
    const theme = themes.natura.light;

    const component = renderer.create(
      <Provider theme={theme}>
        <Typography variant="body1" acessible={true}>
          test
        </Typography>
      </Provider>
    );

    const componentJSON = component.toJSON();
    const firstChild: any = componentJSON.children[0];

    expect(firstChild.props.accessible).toBe(true);
  });

  test('it should set the accessibility label', () => {
    const theme = themes.natura.light;

    const component = renderer.create(
      <Provider theme={theme}>
        <Typography variant="body1" accessibilityLabel="Accessible">
          test
        </Typography>
      </Provider>
    );

    const componentJSON = component.toJSON();
    const firstChild: any = componentJSON.children[0];

    expect(firstChild.props.accessibilityLabel).toEqual('Accessible');
  });
});
