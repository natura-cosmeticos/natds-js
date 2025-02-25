/* eslint-disable react/jsx-filename-extension */
import * as React from 'react'
import { CssBaseline } from '../../../src/Components/CssBaseline'
import { Provider, buildTheme } from '../../../src/Provider'
import { Skeleton } from '../../../src/Components/Skeleton'

const getTheme = (themeKey) => {
  const themesMap = {
    avonDark: { brand: 'avon', mode: 'dark' },
    avonLight: { brand: 'avon', mode: 'light' },
    avonV2Dark: { brand: 'avon_v2', mode: 'dark' },
    avonV2Light: { brand: 'avon_v2', mode: 'light' },
    avonV3Dark: { brand: 'avon_v3', mode: 'dark' },
    avonV3Light: { brand: 'avon_v3', mode: 'light' },
    naturaDark: { brand: 'natura', mode: 'dark' },
    naturaLight: { brand: 'natura', mode: 'light' },
    naturaV3Dark: { brand: 'natura_v3', mode: 'dark' },
    naturaV3Light: { brand: 'natura_v3', mode: 'light' },
    theBodyShopDark: { brand: 'theBodyShop', mode: 'dark' },
    theBodyShopLight: { brand: 'theBodyShop', mode: 'light' },
    aesopDark: { brand: 'aesop', mode: 'dark' },
    aesopLight: { brand: 'aesop', mode: 'light' },
    biomeLight: { brand: 'biome', mode: 'light' },
    biomeDark: { brand: 'biome', mode: 'dark' }
  }

  if (Object.keys(themesMap).includes(themeKey)) {
    return themesMap[themeKey]
  }

  return themesMap.naturaLight
}

export const ThemeProviderDecorator = (Story, context) => {
  const { brand, mode } = getTheme(context.globals.theme)
  const theme = buildTheme(brand, mode, context.globals.custom)

  return (
    <Provider theme={theme}>
      <CssBaseline />
      <React.Suspense fallback={<Skeleton />}>
        <Story {...context} />
      </React.Suspense>
    </Provider>
  )
}

export default ThemeProviderDecorator
