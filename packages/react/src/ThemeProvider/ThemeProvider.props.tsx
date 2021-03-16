import * as React from 'react'
import { BrandThemes, Themes } from '@naturacosmeticos/natds-themes'

export interface ThemeProviderProps {

  children: React.ReactNode

  brand?: Themes

  mode?: BrandThemes
}
