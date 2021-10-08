import { Theme } from '@naturacosmeticos/natds-themes'

export interface ThemeProviderProps {
  /**
   * The application
   */
  children: React.ReactNode

  /**
   * Theme to be used
   */
  theme: Theme

  /**
   * A css prefix to be added in the dynamic class names generation.
   * This option is used to isolate the generated class names and
   * it is useful if you are developing a micro frontend
   */
  cssPrefix?: string
}
