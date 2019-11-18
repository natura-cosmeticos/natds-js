import React, { useState, useEffect } from 'react';
import { addons, makeDecorator } from '@storybook/addons';

import { Provider as ProviderWeb, themes as themesWeb } from '@naturacosmeticos/natds-web';
import { Provider as ProviderMobile, themes as themesMobile } from '@naturacosmeticos/natds-rn';
import { PANEL_ID, CHANGE, PARAM_KEY } from './shared';
import { FORCE_RE_RENDER } from '@storybook/core-events';

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

const knobsChange = 'storybookjs/knobs/change';

export const withTheme = makeDecorator({
  name: 'withTheme',
  parameterName: PARAM_KEY,
  skipIfNoParametersOrOptions: true,
  allowDeprecatedUsage: true,
  wrapper: (getStory, context, { options, parameters }) => {
    const channel = addons.getChannel();
    const platform = parameters || options;
    const { provider: Provider, themes, defaultTheme } = getProvider(platform);
    const [theme, setTheme] = useState(defaultTheme);

    useEffect(() => {
      channel.on(CHANGE, ({ type, name }) => {
        setTheme(themes[name][type]);
      });

      channel.on(knobsChange, () => {
        channel.emit(FORCE_RE_RENDER);
      });

      return () => {
        channel.removeListener(CHANGE)
        channel.removeListener(knobsChange)
      }
    }, []);

    return (
      <Provider theme={theme}>
        {getStory()}
      </Provider>
    );
  },
});
