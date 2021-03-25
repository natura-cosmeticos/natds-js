import { Brand, ThemeMode } from './buildTheme'

export interface ThemeProviderProps {
  /**
   * @required
   */
  children: React.ReactNode

  /**
   * The brand to be used
   * @default "natura"
   */
  brand?: Brand

  /**
   * The mode of application
   * @default "light"
   */
  mode?: ThemeMode

  /**
   * A css prefix to be added in the dynamic class names generation.
   * This option is used to isolate the generated class names and
   * it is useful if you are developing a micro frontend
   * @default "natds"
   */
  cssPrefix?: string
}
