import React, { useState, useEffect } from 'react';
import { addons, makeDecorator } from '@storybook/addons';

import { Provider, themes } from '@naturacosmeticos/natds-web';
import { FORCE_RE_RENDER } from '@storybook/core-events';
import { CHANGE } from './shared';

const DEFAULT_THEME = themes.natura.light;

export const withTheme = makeDecorator({
  name: 'withTheme',
  parameterName: 'theme',
  skipIfNoParametersOrOptions: false,
  allowDeprecatedUsage: true,
  wrapper: (getStory, context, { parameters }) => {
    const channel = addons.getChannel();
    const [theme, setTheme] = useState(DEFAULT_THEME);

    useEffect(() => {
      channel.on(CHANGE, ({ type, name }) => {
        setTheme(themes[name][type]);
        channel.emit(FORCE_RE_RENDER);
      });

      return () => (channel.removeListener(CHANGE))
    }, []);

    console.log(theme)

    return (
      <Provider theme={theme}>
        {getStory(context)}
      </Provider>
    );
  },
});
