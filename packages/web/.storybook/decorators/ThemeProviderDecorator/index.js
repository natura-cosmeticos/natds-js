/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import * as React from "react";
import { CssBaseline } from "../../../src/Components/CssBaseline";
import { Provider } from "../../../src/Provider";
import { themes } from "../../../src/Themes";
import { Skeleton } from "../../../src/Components/Skeleton";

const getTheme = (themeKey) => {
  const themesMap = {
    avonDark: themes.avon.dark,
    avonLight: themes.avon.light,
    naturaDark: themes.natura.dark,
    naturaLight: themes.natura.light,
    theBodyShopDark: themes.theBodyShop.dark,
    theBodyShopLight: themes.theBodyShop.light,
  };

  if (Object.keys(themesMap).includes(themeKey)) {
    return themesMap[themeKey];
  }

  return themesMap.naturaLight;
};

export const ThemeProviderDecorator = (Story, context) => {
  const theme = getTheme(context.globals.theme);

  return <Provider theme={theme}>
    <CssBaseline />
    <React.Suspense fallback={<Skeleton />}>
      <Story {...context} />
    </React.Suspense>
  </Provider>;
};

export default ThemeProviderDecorator;
