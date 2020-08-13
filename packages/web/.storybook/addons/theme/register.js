import React from "react";
import { addons, types } from "@storybook/addons";

import {
  PANEL_ID, ADDON_ID, TITLE, PARAM_KEY,
} from "./shared";
import Theme from "./index";

addons.register(ADDON_ID, (api) => {

  const render = () => <Theme
    channel={addons.getChannel()}
    api={api}
  />;

  render.displayName = "ThemesAddonComponent";

  addons.add(PANEL_ID, {
    title: TITLE,
    type: types.TOOL,
    paramKey: PARAM_KEY,
    match: ({ viewMode }) => viewMode === "story",
    render,

  });
});
