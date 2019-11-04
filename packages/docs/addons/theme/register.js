import React from 'react';
import { addons } from '@storybook/addons';

import { PANEL_ID, ADDON_ID, TITLE, PARAM_KEY } from './shared';
import Theme from './theme';

addons.register(ADDON_ID, (api) => {
  addons.addPanel(PANEL_ID, {
    title: TITLE,
    paramKey: PARAM_KEY,
    render: ({ active, key }) => {
      return (
        <Theme
          key={key}
          channel={addons.getChannel()}
          api={api}
          active={active}
        />
      );
    }
  });
});
