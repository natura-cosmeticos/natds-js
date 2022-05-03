/* eslint-disable complexity */
import { createUseStyles } from 'react-jss'
import { Theme } from '@naturacosmeticos/natds-themes'
import { TypographyProps } from './Typography.props'

type TypographyVariant = Pick<TypographyProps, 'variant'>

const setStyleByVariant = (theme: Theme) => ({ variant }: TypographyVariant) => {
  const headingBase = {
    fontFamily: theme.typography.fontFamily
  }

  // const sutitleBase = {
  //   fontFamily: theme.typography.fontSize.
  // }

  switch (variant) {
    case 'heading1':
      return { ...headingBase, fontSize: 96 }
    case 'heading2':
      return { ...headingBase, fontSize: 60 }
    case 'heading3':
      return { ...headingBase, fontSize: 48 }
    case 'heading4':
      return { ...headingBase, fontSize: 34 }
    case 'heading5':
      return { ...headingBase, fontSize: 24 }
    case 'heading6':
      return { ...headingBase, fontSize: 20 }
    case 'subtitle1':
      return { ...headingBase, fontSize: 20 }
    default:
      break
  }
}

const styles = createUseStyles((theme: Theme) => ({
  example: setStyleByVariant(theme)

}))

export default styles
