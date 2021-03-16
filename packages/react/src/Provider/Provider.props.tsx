import * as React from 'react'
import { BrandThemes, Themes } from '@naturacosmeticos/natds-themes'

export interface IProviderProps {

  children: React.ReactNode

  brand?: Themes

  mode?: BrandThemes
}
