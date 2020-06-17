import React, { useState, useEffect } from 'react';
import { addons, makeDecorator } from '@storybook/addons';
import { FORCE_RE_RENDER } from '@storybook/core-events';
import {
  Provider as ProviderWeb,
  themes as themesWeb,
} from '@naturacosmeticos/natds-web';
import { CHANGE, PARAM_KEY } from './shared';

const THEME_PROVIDERS = {
  web: {
    provider: ProviderWeb,
    themes: themesWeb,
    defaultTheme: themesWeb.natura.light,
  },
};

const backgroundStyles = {
  boxShadow: 'rgba(255,255,255,.1) 0 0 0 1px inset',
  position: 'fixed',
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
  zIndex: 0,
};

const storyStyles = {
  width: '100%',
  position: 'relative',
  zIndex: 1,
};

function getProvider(context, options) {
  return THEME_PROVIDERS[context] || THEME_PROVIDERS[options] || THEME_PROVIDERS.web;
}

function getBackground(disableBackground, theme) {
  const backgroundDefault = 'transparent';

  return disableBackground
    ? backgroundDefault
    : theme.palette.background.default;
}

const wrapper = (getStory, storyContext, { options, parameters }) => {
  const channel = addons.getChannel();
  const { context, disableBackground } = parameters;
  const { provider: Provider, themes, defaultTheme } = getProvider(context, options);
  const [theme, setTheme] = useState(defaultTheme);

  useEffect(() => {
    const knobsChange = 'storybookjs/knobs/change';

    const changeThemeListener = ({ type, name }) => setTheme(themes[name][type]);
    channel.on(CHANGE, changeThemeListener);

    const forceReRenderListener = () => channel.emit(FORCE_RE_RENDER);
    channel.on(knobsChange, forceReRenderListener);

    return () => {
      channel.removeListener(CHANGE, changeThemeListener);
      channel.removeListener(knobsChange, forceReRenderListener);
    }
  }, []);

  const background = getBackground(disableBackground, theme);

  return (
    <Provider theme={theme}>
      <div style={storyStyles}>{getStory(storyContext)}</div>
      <div style={{ ...backgroundStyles, background }} />
    </Provider>
  );
};

export const withTheme = makeDecorator({
  name: 'withTheme',
  parameterName: PARAM_KEY,
  skipIfNoParametersOrOptions: true,
  allowDeprecatedUsage: true,
  wrapper,
});
