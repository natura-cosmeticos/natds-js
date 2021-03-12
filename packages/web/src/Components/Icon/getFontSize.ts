import { IIconSizes } from '@naturacosmeticos/natds-styles'
import { IThemeWeb } from '../../Themes'

type IconFontSizeArgs = {
  size?: keyof IIconSizes,
  theme: IThemeWeb
}

export const getFontSize : ({ size, theme }: IconFontSizeArgs) => string = ({ size = 'standard', theme }) => {
  /**
   * @todo fix TS7053: Element implicitly has an 'any' type, expression of type 'string' can't be used to index type {}
   */
  if (typeof theme !== 'undefined' && typeof theme.iconSizes !== 'undefined' && typeof theme.iconSizes[size] !== 'undefined') {
    const { iconSizes } = theme
    const fontSize = iconSizes[size]

    return `${fontSize}px`
  }

  return '1em'
}
