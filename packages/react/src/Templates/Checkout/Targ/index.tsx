import React from 'react'
import styles from './styles'
import { buildTheme } from '../../../ThemeProvider'
import { brandTransform } from '../../mocks/mocks'
import { BrandProps } from '../../GlobalTypes'

type Mode = 'light' | 'dark'

interface BrandP {
  // eslint-disable-next-line react/require-default-props
    brand?: BrandProps
    mode: Mode
    top: number
    size: 'small' | 'medium'
    label: 'on' | 'off'
    // eslint-disable-next-line react/require-default-props
    value?: string
}
const Targ: React.FC<BrandP> = ({
  brand, mode, top, size, value, label
}) => {
  const marca = buildTheme(brand, mode)
  let back = marca.color.primary
  if (!brand) {
    back = 'none'
  }
  const { container, targ, title } = styles({ back, top, size })
  return (
    <div className={container}>
      <div className={targ}>
        {value && value}
      </div>
      <div className={title}>
        {label === 'on' && brandTransform(brand || '')}
      </div>
    </div>
  )
}
export default Targ
