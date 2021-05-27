import { Theme } from '@naturacosmeticos/natds-themes'
import React from 'react'
import { useTheme } from 'react-jss'
import { LogoProps } from './Logo.props'
import styles from './Logo.styles'

const Logo = ({
  color = 'neutral',
  size = 'veryHuge',
  model = 'primary'
}: LogoProps): JSX.Element => {
  const theme: Theme = useTheme()
  const classes = styles({ size })

  const convertedModel = model === 'primary' ? 'a' : 'b'
  const isCustom = color === 'neutral' ? 'neutral' : 'custom'

  const BASE_URL = 'https://cdn.jsdelivr.net/npm/@naturacosmeticos/natds-themes@latest/dist/assets'
  const URL = `${BASE_URL}/${theme.asset.brand[isCustom][convertedModel]}.svg`

  return (
    <img className={classes.root} src={URL} />
  )
}

export default Logo
