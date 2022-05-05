/* eslint-disable complexity */
import { createUseStyles } from 'react-jss'
import { Theme } from '@naturacosmeticos/natds-themes'

type TypographyVariant = {
  variant: 'heading1' |
  'heading2' |
  'heading3' |
  'heading4' |
  'heading5' |
  'heading6' |
  'subtitle1' |
  'subtitle2' |
  'body1' |
  'body2' |
  'caption' |
  'overline'
}

const setFontFamily = (theme: Theme) => ({ variant }: TypographyVariant) => {
  if (variant.includes('heading')) {
    return theme.typography.headline.fontFamily
  }

  return theme.typography.body.regular.fontFamily
}

const setTextTransform = () => ({ variant }: TypographyVariant) => {
  if (variant === 'overline') {
    return 'uppercase'
  }

  return 'none'
}

const styles = createUseStyles((theme: Theme) => ({
  text: {
    fontFamily: setFontFamily(theme),
    fontWeight: ({ variant }: TypographyVariant) => theme[variant].fontWeight,
    fontSize: ({ variant }: TypographyVariant) => theme[variant].fontSize,
    lineHeight: ({ variant }: TypographyVariant) => theme[variant].lineHeight,
    letterSpacing: ({ variant }: TypographyVariant) => theme[variant].letterSpacing,
    textTransform: setTextTransform()
  }

}))

export default styles
