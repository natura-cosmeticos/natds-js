/* eslint-disable react/no-danger-with-children */
import React from 'react'
import { useTheme } from '@material-ui/core/styles'
import { IThemeWeb } from '../../Themes'
import { LogoProps } from './Logo.props'
import { useStyles } from './Logo.styles'

const Logo = ({
  color = 'neutral',
  size = 'veryHuge',
  model = 'a',
  arialLabel = 'logo'
}: LogoProps) => {
  const theme: IThemeWeb = useTheme()
  const { root } = useStyles({ size, color })

  const checkColor = color === 'neutral' ? 'neutral' : 'custom'

  console.log({ theme })

  const logo = theme.asset.brand[checkColor][model].file

  return (
    <div
      style={{ width: theme.sizes[size] }}
      className={root}
      dangerouslySetInnerHTML={{ __html: logo }}
      role="img"
      aria-label={arialLabel}
    />
  )
}

Logo.displayName = 'Logo'

export default Logo
