import { Brand, ThemeMode } from './buildTheme'

export interface ThemeProviderProps {

  children: React.ReactNode

  brand?: Brand

  mode?: ThemeMode
}
