import React from 'react'
import { LogoProps } from './Logo.props'
import styles from './Logo.styles'

const Logo = ({
  brand = 'natura',
  color = 'neutral',
  size = 'veryHuge',
  model = 'primary'
}: LogoProps): JSX.Element => {
  const classes = styles({ size })
  const convertedModel = model === 'primary' ? 'a' : 'b'
  const isCustom = color === 'neutral' ? 'official' : 'custom'

  const BASE_URL = 'https://cdn.jsdelivr.net/npm/@naturacosmeticos/natds-themes@0.6.0/dist/assets'
  const URL = `${BASE_URL}/${brand}-${convertedModel}-${isCustom}.svg`

  return (
    <img className={classes.root} src={URL} />
  )
}

export default Logo
