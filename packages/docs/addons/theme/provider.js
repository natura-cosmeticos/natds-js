import React, { useState, useEffect } from 'react';
import { addons, makeDecorator } from '@storybook/addons';

import { Provider as ProviderWeb, themes as themesWeb } from '@naturacosmeticos/natds-web';
import { Provider as ProviderMobile, themes as themesMobile } from '@naturacosmeticos/natds-rn';
import { CHANGE } from './shared';

const THEME_PROVIDERS = {
  web: {
    provider: ProviderWeb,
    themes: themesWeb,
    defaultTheme: themesWeb.natura.light
  },
  mobile: {
    provider: ProviderMobile,
    themes: themesMobile,
    defaultTheme: themesMobile.natura.light
  }
};

function getProvider(context) {
  return THEME_PROVIDERS[context] || THEME_PROVIDERS.web;
}

export const withTheme = makeDecorator({
  name: 'withTheme',
  parameterName: 'theme',
  skipIfNoParametersOrOptions: false,
  allowDeprecatedUsage: true,
  wrapper: (getStory, context, { parameters }) => {
    const { provider: Provider, themes, defaultTheme } = getProvider(parameters);
    const channel = addons.getChannel();

    const [theme, setTheme] = useState(defaultTheme);

    useEffect(() => {
      channel.on(CHANGE, ({ type, name }) => {
        setTheme(themes[name][type]);
      });

      return () => (channel.removeListener(CHANGE))
    }, []);

    return (
      <Provider theme={theme}>
        {getStory(context)}
      </Provider>
    );
  },
});
