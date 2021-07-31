import React from 'react'
import { Theme } from '@naturacosmeticos/natds-themes'
import { useTheme } from 'react-jss'
import { LogoProps } from './Logo.props'
import styles from './Logo.styles'

const Logo = ({
  color = 'neutral',
  size = 'veryHuge',
  model = 'a',
  arialabel = 'logo'
}: LogoProps): JSX.Element => {
  const theme: Theme = useTheme()
  const classes = styles({ size, color })

  const checkColor = color === 'neutral' ? 'neutral' : 'custom'

  const logo = theme.asset.brand[checkColor][model].file

  return (
    <div
      className={classes.root}
      dangerouslySetInnerHTML={{ __html: logo }}
      role="img"
      aria-label={arialabel}
    />
  )
}

export default Logo
