/* eslint-disable react/no-danger-with-children */
import React from 'react'
import { useTheme } from '@material-ui/core/styles'
import { IThemeWeb } from '../../Themes'
import { ILogoProps } from './Logo.props'
import { useStyles } from './Logo.styles'

const Logo = ({
  color = 'neutral',
  size = 'veryHuge',
  model = 'a',
  arialabel = 'logo'
}: ILogoProps) => {
  const theme: IThemeWeb = useTheme()
  const checkColor = color === 'neutral' ? 'neutral' : 'custom'
  const logo = theme.asset?.brand[checkColor][model].file

  const { root } = useStyles({ size, color, model })

  return (
    <div
      className={root}
      dangerouslySetInnerHTML={{ __html: logo }}
      role="img"
      aria-label={arialabel}
    />
  )
}

Logo.displayName = 'Logo'

export default Logo
