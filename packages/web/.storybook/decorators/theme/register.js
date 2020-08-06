import React from "react";
import { addons, types } from "@storybook/addons";

import {
  PANEL_ID, ADDON_ID, TITLE, PARAM_KEY,
} from "./shared";
import Theme from "./index";

addons.register(ADDON_ID, (api) => {
  addons.add(PANEL_ID, {
    title: TITLE,
    type: types.TOOL,
    paramKey: PARAM_KEY,
    match: ({ viewMode }) => viewMode === "story",
    render: () => <Theme
      channel={addons.getChannel()}
      api={api}
    />,

  });
});
