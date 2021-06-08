import React from 'react'
import { Theme } from '@naturacosmeticos/natds-themes'
import { useTheme } from 'react-jss'
import { LogoProps } from './Logo.props'
import styles from './Logo.styles'

const Logo = ({
  color = 'neutral',
  size = 'veryHuge',
  model = 'a',
  arialLabel = 'logo'
}: LogoProps): JSX.Element => {
  const theme: Theme = useTheme()
  const classes = styles({ size, color })

  const checkColor = color === 'neutral' ? 'neutral' : 'custom'

  const logo = theme.asset.brand[checkColor][model]

  return (
    <div
      className={classes.root}
      dangerouslySetInnerHTML={{ __html: logo }}
      role="img"
      aria-label={arialLabel}
    />
  )
}

export default Logo
