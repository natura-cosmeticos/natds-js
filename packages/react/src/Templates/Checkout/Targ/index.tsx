import React from 'react'
import styles from './styles'
import { buildTheme } from '../../../ThemeProvider'

type BrandProps =
    'aesop' | 'avon'
    | 'biome'
    | 'natura'
    | 'theBodyShop'
    | 'consultoriaDeBeleza'
    | 'natura_v2'
    | 'casaEestilo'

type Mode = 'light' | 'dark'

interface BrandP {
    brand: BrandProps
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
  const brandTransform = (brands: string) => ({
    aesop: 'Aesop',
    avon: 'Avon',
    biome: 'Biome',
    natura: 'Natura',
    natura_v2: 'Natura',
    theBodyShop: ' The Body Shop',
    consultoriaDeBeleza: 'Consultoria de Beleza',
    casaEestilo: 'Casa & Estilo'
  })[brands]

  const marca = buildTheme(brand, mode)
  const back = marca.color.primary
  const { container, targ, title } = styles({ back, top, size })
  return (
    <div className={container}>
      <div className={targ}>
        {value && value}
      </div>
      <div className={title}>
        {label === 'on' && brandTransform(brand)}
      </div>
    </div>
  )
}
export default Targ
